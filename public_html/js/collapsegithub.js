document.write('\
<h1>Github</h1>\
<p>Git is a Distributed Version Control System, which allows multiple people to work on the source of a project at the same time. The difference between Git and other version control systems like svn is how it treats data. With git, commits are treated like a snapshot of the states of the files in a project at any point in time. If a file has changed, its changes will be stored in a git commit, otherwise, it will be stored as a link to a commit which had happened previously. Since all of these commits (snapshots) are happening locally, the master branch of the project does not have to be touched for the majority of the operation. When you need to update the master so that other people have access to your code, you are able to send just the contents of your latest commit, which gives you some safety in that you are still able to roll back to previous commits.</p>\
\
<br>\
<h1>Git commands</h1>\
\
<table border="1">\
  <tr><td>git clone link/to/a/repository.git</td>\
<td>Git clone is one of the two commands which will start a new repository. Git clone will copy the contents of the git file contained at the link location into your current directory. It will also create a (.git) folder, which is hidden and contains all of your commits, the location of your master repository, and git settings.</td></tr>\
\
<tr><td>git init</td>\
<td>Git init is the second command which will start a new repository. It does not pull from an online location; instead, it creates the (.git) folder, which holds all of the git data for the folder.</td></tr>\
\
<tr><td>git status</td>\
<td>Returns information about the status of your commit. This includes the tracking state of all of the files in the working directory, as well as your commit status in relation to your current branch.</td></tr>\
\
<tr><td>git add --all\
<br>git add filetoadd.txt\
<br>git rm filetoremove.txt\
</td>\
<td>Git add will add file names to a tracker file, which records which files you want to put into your commit. Using git add --all will push every change made in the git directory into the commit, but more precise commits can be made by adding and removing individual files.\
</td></tr>\
\
<tr><td>git commit</td>\
<td>Opens up a text editor which will allow you to describe your commit. Keep it short. Once it exits, the commit will be saved to the (.git) folder.</td></tr>\
\
<tr><td>git push</td>\
<td>This command will add filenames to the commit, so that when the commit command is run, these files will be included. Generally, newly created files are untracked, so they will have to be added to the commit before committing for any changes to be recorded.</td></tr>\
\
<tr><td>git pull</td>\
<td>This command will reconcile the master with your local version of the source code. It will not change your commits to your local repository.</td></tr>\
</table>\
<br>\
<br>\
\
<h1>Advanced Concepts</h1>\
\
<p>The above commands are all well and good as long as you are content to push to the master directly every time. However, this is still in line with the functionality of a centralized version control system (git is a distributed vcs), so git comes with the functionality of creating what are called "forks" and "branches". These abstractions allow the git user to make changes which will not immediately affect the master, and make it much simpler to implement discrete features.</p>\
\
<br>\
<h1>Forking</h1>\
\
<p>A fork happens when you have an idea for a project which is contrary to the direction in which the project is currently moving. It is a way to start from where the original authors of a project are currently, and build your own ideas from that. Forking refers mostly to what is going on serverside - your local repository will react as if it is any other repository. By going to Github and clicking "fork" on the top right of the page, a copy of the repository will appear in your Github home repositories. By using the command "git clone", you will then be able to start work on the project.</p>\
<br>\
<p>If you would still like to receive updates from the original project, you will have to sync it. As a bit of background, projects which your project is based on are called "upstream"; the compliment of this is projects which are based on your project, which are called "downstream". Run these commands in order:</p>\
<br>\
<table border="1">\
<tr><td>git remote -v</td>\
<td>This command will list all of the repositories which your git working directory is linked to, along with their relationship to the project. Sample out:\
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git(fetch)\
# origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git(push)</td></tr>\
\
<tr><td>git remote add <br>upstream link/to/your/upstream.git</td>\
<td>This command will add an upstream repo to the list of repos which are linked to you project. This will allow you to continue to pull from your upstream source, though you will not be able to pull from it.</td></tr>\
\
<tr><td>git remote -v</td>\
<td>When this command is run again, you should see that there are a few new entries which link you and your upstream repo\
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)\
# origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)\
# upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)\
# upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)</td></tr>\
</table>\
<br>\
\
<h1>Branching and Merging</h1>\
\
<p>This is the main advantage git has over other forms of version control; it allows multiple people to create a new workflow and commit to it without changing the master. This allows teams to be able to "branch" off of a project, implement a specific feature, and then merge with the master to create a more complete project. The official documentation of branches can be found here: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell.</p>\
<br>\
<p>To understand how branches work, you should think of commits as a linked list, with a pointer at their head. Every time a new commit is made, it "points" to the commit which came before it, so that the commits are laid out sequentially. The current commit on the master branch is called "master"; it does nothing more than say which commit is the most recent one. When a new commit is made to the master, the "master" pointer moves to point to the new commit, so git knows which commit it should be working from.</p>\
<br>\
<p>When a new branch is created, git just creates another pointer ("testing" for example) and sets it to point to the current commit, just like head is doing. In this way, the master branch and the testing branch are no different. Subsequent commits can be made to either branch thanks to another pointer variable called "HEAD". When there is just one branch, head is automatically set to point to its pointer, to avoid errors. When there are two branches, there is a little more freedom, so the command "git checkout (repo)" will switch the head pointer back and forth, allowing you to check on both versions of the project. If you want to remerge with the master, git will go back down the tree to the common ancestor, then attempt to reconcile all of your changes from there.</p>\
<br>\
<table border="1">\
<tr><td>git branch (repo)</td>\
<td>Creates a new pointer to your current commit. This is used to track which commit you should be building on, as well as the ancestry of each commit since the branch was created.</td></tr>\
\
<tr><td>git log --oneline --decorate</td>\
<td>This command will show you all of the commit information stored in your (.git) directory, from newest to oldest, along with the locations of your pointers. This is an extremely useful command if you have multiple branches and are not sure which branch or commit you are on.</td></tr>\
\
<tr><td>git checkout (repo)</td>\
<td>This command will make the HEAD pointer point to the repository designated by repo. It will change the contents of your working directory to whatever is stored in that branch as well. Remember that you can checkout the master branch when needed.</td></tr>\
\
<tr><td>git checkout -b (repo)</td>\
<td>This command will create a new branch and check it out immediately.</td></tr>\
\
<tr><td>git merge (repo)</td>\
<td>This command will attempt to reconcile the changes between the specified branch and the currently checked out branch TO the currently checked out branch. If the checked out branch is just an outdated version of the merge branch, the pointer will just move forward, in what is known as a "fast-forward".\
\
If the branches have already diverged, git will recursively backtrack until it hits a common ancestor, then it goes back up the line merging the individual commits back together, as in the previous picture.</td></tr>\
\
<tr><td>git branch -d (repo)</td>\
<td>This command DELETES a branch. It should only be used after the changes which were made to the branch have been merged back into another branch.</td></tr>\
\
</table>\
\
\
<br><br><h1>Troubleshooting - Merging</h1>\
<br>Most of the problems you will have with git stem from other programmers modifying the master in a way which is incompatible with your local commits. This is known as a merge conflict. It can happen between branches, or when you are using git pull to pull from the master into your home directory. There are many tools available which can help you, such as "git mergetool", "opendiff", and Crystal http://homes.cs.washington.edu/~mernst/pubs/vc-conflicts-fse2011-tooldemo.pdf\
\
<br><br>Generally, when there are merge conflicts, it means that more than one person has edited the exact same line of code. Git will attempt to merge the line, realize that it doesn\'t know what it should keep, then include both lines in the documents in question, for the programmer to go in and change manually. When a git merge fails, run git status to see which files have failed to merge, then open up those files for editing. You should see blocks of code formatted similarly to this:\
<br><br>\
<<<<<<< HEAD:index.html\
<div id="foo">contact : email.support@github.com</div>\
=======\
<div id="foo">\
 please contact us at support@github.com\
</div>\
>>>>>>> iss53:index.html\
\
<br><br>In this example, the currently checked out branch is displayed above the "=======", and the branch to be merged is displayed below it. The pointers for both branches simply output what they think should be in that location in the file, and leave it up to the programmer to decide which one of them is right.\
\
<br><br>Once the merge has been completed, you still need to commit the changes to the checked out branch. First run "git status" to make sure that everything is in order, and all of the merged files are being tracked, then run "git commit". The commit message will be different that usual, to signify that it is a merge commit, not a standard commit. Once the message has been modified, the merge will be over - you will be free to delete the merged branch, since all of your changes are now included in the check out branch.</p>\
<br>\
<br>\
<br>\
');