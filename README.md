# Udacity Fullstack Nano Degree - Project 2

### Overview
---

The instructions in this readme will get a copy of the project up and running on a local machine for development and testing purposes.

### Prerequisites
---

It is assumed that an active connection to the internet will be available at all times. To run this program Node, NPM, GULP and GIT are required, plus access to Terminal (MAC Linux) or Command Prompt (Windows). Also required is that a web browser be installed. It was designed and tested using xxx 2.7.10.

Check if you have Node and NPM installed:

### MAC AND WINDOWS

To determine whether you have Node installed, open the Terminal application, type the following, and press Return:
```
node -v
```

This command will report the version of Node:
```
v9.11.1
```

If your machine does not recognise the node command, then you might need to install it.
```
https://nodejs.org/en/download/
```

To determine whether you have NPM installed, open the Terminal application, type the following, and press Return:
```
npm -v
```

This command will report the version of NPM:
```
5.6.0
```

If your machine does not recognise the NPM command, then you might need to install it.
```
https://www.npmjs.com/get-npm
```

To determine whether you have GIT installed, open the Terminal application, type the following, and press Return:
```
git --version
```

This command will report the version:
```
git version 2.15.1 (Apple Git-101)
```

If your machine does not recognise the command, then you might need to install it.
```
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
```

To determine whether you have GULP installed, open the Terminal application, type the following, and press Return:
```
gulp -v
```

This command will report the version:
```
CLI version 3.9.1
```

If your machine does not recognise the command, then you might need to install it. You will need to install NPM first and use that to install GULP.
```
https://gulpjs.com/
```

### INSTALL AND RUN
---

To install the application, assuming that the required prerequisite software is installed, use GIT to clone the repository.

Clone: https://github.com/dgabrahams/Udacity-NanoDegree-Fullstack-Project-2.git

To clone run:
```
git clone https://github.com/dgabrahams/Udacity-NanoDegree-Fullstack-Project-2.git
```

It should build into your current working folder, and produce an output similar to that found below:
```
Cloning into 'Udacity-NanoDegree-Fullstack-Project-2'...
remote: Counting objects: 104, done.
remote: Compressing objects: 100% (54/54), done.
remote: Total 104 (delta 40), reused 102 (delta 38), pack-reused 0
Receiving objects: 100% (104/104), 644.44 KiB | 750.00 KiB/s, done.
Resolving deltas: 100% (40/40), done.
```

Navigate into the newly created 'ud036_StarterCode' folder:
```
cd Udacity-NanoDegree-Fullstack-Project-2
```

To run simply type the following:
```
gulp
```

This should run the gulp default task, which should delete the previous /dist folder and generate a new one with all the HTML, CSS, JS and other assets required. Then simply load the index.html file into a browser to view.

### License
---

This project is licensed under the MIT License.

### Acknowledgments
---




