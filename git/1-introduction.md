# Introduction to Git

Git is a distributed version control system that allows multiple developers to work on the same codebase simultaneously. It keeps track of changes to the code, making it easy to collaborate, roll back to previous versions, and maintain a history of the project.

Here are some basic concepts and commands you'll need to know to get started with Git:

## Basic Workflow
1. Initialize a git repository in a directory
```bash
git init
```
 or **Clone** a repository from a remote server to your local machine.
```bash
git clone https://github.com/user/repo.git
```
2. **Make changes** to the code in your local repository.
3. **Stage** the changes you want to commit.
```bash
git add .
```
4. **Commit** your changes to the local repository.
```bash
git commit -m "commit message"
```
5. **Push** your changes to the remote repository.
```bash
git push
```

## Branches

A **branch** is a separate version of the codebase that you can make changes to without affecting the main branch (usually called `master` or `main`). This allows multiple developers to work on different features simultaneously, and then merge their changes back into the master branch when they're ready.

- To **create** a new branch and switch to it:
```bash
git branch new-branch
git checkout new-branch
```
- To **switch** to an existing branch:
```bash
git checkout existing-branch
```
- To **merge** changes from one branch into another:
```bash
git checkout branch-to-merge-into
git merge branch-to-merge
```
- To **delete** a branch:
```bash
git branch -d branch-to-delete
```

## Remotes

A **remote** is a copy of the repository that is hosted on a remote server. You can have multiple remotes, and you can push and pull changes from them. The most common remotes are `origin` (the default remote when you clone a repository) and `upstream` (the original repository that you cloned from). You can add additional remotes if you want to collaborate with other developers. For example, if you fork a repository, you can add the original repository as a remote so that you can pull changes from it.

- To **add** a new remote:
```bash
git remote add new-remote
```
- To **remove** a remote:
```bash
git remote remove remote-to-remove
```
- To **rename** a remote:
```bash
git remote rename old-name new-name
```
- To **list** all remotes:
```bash
git remote -v
```
- To **pull** changes from a remote:
```bash
git pull remote-to-pull-from
```
- To **push** changes to a remote:
```bash
git push remote-to-push-to
```

The default remote is `origin`, so you can omit it when you pull or push changes. For example, `git pull` is equivalent to `git pull origin`. `origin` is the default remote when you clone a repository, but you can change it with the `git remote set-url` command.

## Other useful commands

- To **check** the status of your local repository:
```bash
git status
```
- To **view** the commit history:
```bash
git log
```
- To **view** the commit history in a more compact format:
```bash
git log --oneline
```
- To **view** the commit history for a specific file:
```bash
git log --oneline path/to/file
```

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Git Visual Cheat Sheet](https://ndpsoftware.com/git-cheatsheet.html#loc=index;)
- [Git Branching](https://learngitbranching.js.org/)
- [Git Immersion](https://gitimmersion.com/)
