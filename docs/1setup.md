# Installing Docsify to your computer

---

##  Before you start

We assume you --
- are familiar with the Terminal on Mac and Linux.
- know not to copy the `$` as part of the commands.
- you are familiar with Git & GitHub and you are using them.

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

1. Activate the local server
```
$ docsify serve ./docs
```

# Installing Docsify to a Repl
This is currently broken at least for me. You can [try it out](http://www.replit.com) if you want.