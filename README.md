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

-> Branchs
-> deletando branch indevidas ( como recuperar?)
-> git branch -D feat-pagina-emcontrucao
-> git checkout hashComit da branch deletada
-> git checkout -b nome_branch (criar branch)
-> se deletou e perdeu o hash do commit
-> git reflog (atualiza as referencia de tudo que aconteceu no repositorio)
-> aqui voce recupera o ultimo hash do commit
-> git checkout -b nome_branch hashCommit
-> ex: git checkout -b feat-construcao 07csds87
