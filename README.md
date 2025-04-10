### Tabnews - trilha rápida

-> Anotações sobre o curso -

git log - listar os commits do repositório.
git add - sobe alterações para a staging area.
git commit - realiza novos commits.
git commit --amend - substitui o commit anterior por um novo, mas aproveita as alterações dele.
git diff - calcula a diferença entre as versões/alterações dos arquivos.

->migrations
"migration:create":"node-pg-migrate --migrations-dir infra/migrations create",
"migration:up": "node-pg-migrate -m infra/migrations --envPath .env.development up"

    --migrations-dir é a mesma coisa que -m
