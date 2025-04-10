import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersion = await database.query("SHOW server_version");
  const databaseVersionValue = databaseVersion.rows[0].server_version;

  const databaseMaxConnection = await database.query("SHOW max_connections");
  const databaseMaxConnectionValue =
    databaseMaxConnection.rows[0].max_connections;

  //forma de evitar sqlInjection (node-postgres)
  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenConnection = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname= $1;",
    values: [databaseName],
  });

  const databaseOpenConnectionValue = databaseOpenConnection.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionValue),
        open_connections: databaseOpenConnectionValue,
      },
    },
  });
}

export default status;
