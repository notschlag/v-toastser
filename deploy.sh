#!/usr/bin/env sh

npm run build


git init
git add -A
git commit -m "Init"
git push -f git@github.com:notschlag/v-toastser.git master:main

cd -