git checkout release
echo 'On Release Branch!'
cp .gitignore .gitignore.master
echo 'Backed up .gitignore'
cp .gitignore.release .gitignore
git add .
git commit -m 'release build'
git push origin release -f
echo 'Force Pushed Release!'
cp .gitignore.master .gitignore
echo 'replace .gitignore'
rm -f .gitignore.master
echo 'delete .gitignore backup'
echo 'Released!'
git checkout master -f