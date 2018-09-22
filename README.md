# Intro to React Redux
## Contents

## Requirements
- npm
- react CLI commands
- VS code (or similar)

## Getting Started
1. Open the terminal
2. Navigate to the folder you want this in
3. use the comman `create-react-app [appName]` to create the app with your choice od name
4. `cd [appName]`
5. `npm i redux react-redux --save`
6. `code .`
7. `npm start`
This should open your app and install your things.

From here you should clean out the code that comes with the create command. Move the app file into `.src/Components/App` folder with it's .css file. App.js should return an empty div, delete the logo source in the app. App.css should be completely empty. Delete the logo file. Clear all code in index.css. Fix the sourcing in index.js to properly target App.js; should look like this `import App from './Components/App/App.js';`. Finally, delete the app test file.

Should be everything.

## What is Redux?
Redux solves the issue of moving data all over your application. React is set up so that only childeren files can grab data from parents. This makes getting data from one low level page to another low level page very difficult. Redux is a way to pass the data directly to components without needing to be the parent; it is totally separate from the regular component tree.

### Redux Terms
- Redux State: This is similar to the React State, but has to do with Redux instead.
- Store: This is where we go to get the information that needs to be passed along.