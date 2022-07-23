# Installing Docsify to your computer
---
##  Before you start
We assume you --
- are familiar with the Terminal on Mac and Linux.
- know not to copy the `$` to enter commands.
- you are familiar with GitHub

## Installing Packages & Workspace setup
1. Open the terminal
1. Update NodeJS
```
$ npm install -g npm
```

1. Install Docsify globally in the terminal by running the following commands:
```
$ npm i docsify-cli -g
```
1. Create and navigate to your project folder:
```
$ cd ~
$ mkdir Workspace
$ cd Workspace
$ mkdir project
$ cd project
```
1. Initialize documentation folder
```
$ docsify init ./docs
```

# Installing Docsify to a Repl
This is currently broken. Don't even bother.