# generation-s
![Generation(s) logo](./readmeAssets/generations.svg)

Here is a revised version of the contribution guide with bullet points and proper spacing:

### 1. Introduction

Generation(s) is an open-source interactive application for musical exploration.

### 2. Installation

To collaborate, clone the repository or download the .ZIP file to experiment in a local setting.

To install the OpenCV library, run `pip import cv2` in `python_tracker`. Python3 must be installed on your machine.

To install all the dependencies, run `npm install` in `/root`, `/server`, and `/client`. Node.js must be installed on your machine.

### 3. Contributing

This application is currently under development. If you want to contribute, follow these steps:

- Create an issue and corresponding branch.
- Add to the documentation by contributing to this README.md file, which is a good first issue.

By default, this repo uses React. However, since it's basically HTML, you can create a simple div like this:

```
export function MyDiv () {
    return (
        <div>
            <h1>My Div</h1>
        </div>
    )
}
```

To style it, import the CSS file in the same folder and add the class to the div like this:

```
import './myDiv.css'

export function MyDiv () {
    return (
        <div className="div-one">
            <h1>My Div</h1>
        </div>
    )
}
```

### 4. How to use GitHub

To clone the repo, use this command in the folder you want to clone the repo (Git must be installed on your machine):

```
git clone https://github.com/pivilartisant/generation-s.git
```

After creating an issue on the repo, create a branch in GitHub:

- Click on the branch dropdown menu and type a new branch name.
- Click on "Create branch: newBranchName".

Then, in your code editor (VS Code, Atom, Sublime Text, etc.), open the terminal and type:

```
git checkout <branch-name>
```

to switch to the branch you just created.

To add code changes to the branch, stage the changes using the command:

```
git add .
```

Then, commit the changes using the command:

```
git commit -m "your commit message"
```

Finally, push the changes to the branch using the command:

```
git push
```

After that, you can create a pull request on the repo:

- Click on "Compare & pull request".
- Follow the instructions and wait for the pull request to be merged.

If you struggle with GitHub and open-source collaboration, we recommend this resource:

- https://github.com/pivilartisant/open-pixel-art.
