#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

git init
git add -A
git commit -m 'New Deployment'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nokauttorton/kk-wedding.git master:gh-pages
# git push -f git@github.com:nokauttorton/kkwedding.github.io.git master:gh-pages
# git push -f https://github.com/nokauttorton/kkwedding.github.io master:gh-pages

cd -