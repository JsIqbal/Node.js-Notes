1. **Github is actually a database.**
2. **Project's codebase is kept in GitHub.**

3. `git init` -> to initialize git in the project.
4. `ls` -> to check the list.
5. `ls -a` to check even the hidden files and folders too.

6. Copy the https link from under the code button from the GitHub website.

7. In the terminal: `git remote add origin https://github.com/UitsHabib/demeed.git`
9. `cd .git/` -> to get into the .git folder.
8. `ls -a` -> to check even the hidden list.

9. See if the config file is there in the .git folder.
10. `cat config` -> to access config using.
11. Check if there is a URL in the config file.
12. `cd ..` to get back to the previous directory.
13. `git status` -> to check the status of the git tracker.

14. We will not add node modules.
15. Use gitignore to ignore the recommended files. One has to just add the file or folder name in the gitignore file to ignore it from tracking by git.

16. `git add file name` -> to add to git so that git can track it.
17. `git add .` -> to add and track all the files.
18. `git commit -m "Add first commit"` -> to finish the work.
19. `git branch` -> to see all the branches.
20. `git branch iqbal/first-project` -> to create a new branch.

21. `git branch` -> to see the branches.

22. `git switch iqbal/first-project` -> to switch to the new branch
or, `git checkout -b your_branch`
23. `git push origin iqbal/first-project`

23. `git log --oneline`

If we create a branch from an existing branch, then all the commits will also be in the new branch.

24. There are three types of merge:
    i. **Rebase Merge**: master stays at the master's place, and the new commits stay after that.
    ii. **Normal Merge**: `git merge (branch name)`.
    iii. **Squash Merge**: 1 commit for all the changes.

Instructions:
- `git add .`
- `git commit -m <commit message>`

If push:
1. `git fetch`
2. `git rebase origin/develop`

Single push command:
1. `git pull --rebase origin/develop`

For Push:
- `git push --force-with-lease origin <your branch>`

For Normal Merge:
If push:
1. `git fetch`
2. `git merge origin/develop`

Single push command:
1. `git pull origin/develop`

- `rm -fr .git` -> remove the .git folder.
- `git push origin -d iqbal/first-project` -> delete the wanted branch.
