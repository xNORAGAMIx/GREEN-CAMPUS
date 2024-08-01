Clone the repository from xNORAGAMIx/GREEN CAMPUS

1. create a folder and run the command ->

2. git clone "file url" on terminal(linux) or git bash(windows)

3. go to folder client and run npm install

4. go to folder server and run npm install

Folder Structure

client - frontend (React/Tailwind) 

server - backend (Express/Mongoose)

config folder in server is for the database connectivity

1. use .env for ports and connection strings and secret keys

2. if you are working on backend, for now just connect to your local mongoDB server, later we can use Mongo Atlas



update your local repository -> git pull origin main

I think it will be better to work on individual branches for now.

Create a main branch with your name - <git branch manas>, then

Create a branch for a feature you are working on->

if you are working on frontend/homepage ->
1. git branch <your_branch_name> (to create a new branch)
2. git checkout <your_branch_name> (to switch to branch <your_branch_name>)
3. code your changes
4. git add . or git add filenames(you worked on)
5. git commit -m "Commit message"
6. git push origin <your_branch_name>

Once you have completed working on your branch/feature ->
1. switch to your main branch
2. merge the feature branches -> git merge <your_branch_name>



Push/commit using VSCODE or terminal

if on vscode -> commit and push

if you are using terminal
1. code your changes
2. git add . or git add filenames(you worked on)
3. git commit -m "Commit message"
4. git push origin main



P.S - Download any dependencies you need, I have just added the basic ones.





