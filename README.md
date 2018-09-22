# Intro to React Redux
## Contents

## What is Redux?
Redux solves the issue of moving data all over your application. React is set up so that only childeren files can grab data from parents. This makes getting data from one low level page to another low level page very difficult. Redux is a way to pass the data directly to components without needing to be the parent; it is totally separate from the regular component tree.

### Redux Terms
- Redux State: This is similar to the React State, but has to do with Redux instead.
- Store: The big object that will hold all the information for the application.
- Reducer: A function that runs everytime a function is dispatched.

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

## Providing the Store with Redux
In your index.js you need:
```
import { createStore } from 'redux';

// This is creating the store.
const storeInstance = createStore(
    // This function is our first reducer.
    () => {
        console.log('Reducer Test!');
    },
);
```
Run it! It puts the thing in the console, yay.

Now import `Provider` from `'react-redux'` using deconstruction. Then we'll use Provider as a wrapper for the `<App />` in the render. This will cause all kinds of problems! To fix those problems we need to send our Provider tag some props in the form of `store={storeInstance}` this will give the entire app access to the store.

I say again: "This is how we **provide** the **store** to our react application." Got it? Great.

## Connecting the Store to App.js
We need to import a thing. Import `conect` from `react-redux`. Then we need to change that `export default` a bit. To add connect to it we need to do `connect()(App)`. This is currying from before, why is it here? To bind properly.