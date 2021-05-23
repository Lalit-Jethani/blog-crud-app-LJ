## Author 
Lalit Jethani 

## Email
Lalit.jethani@gmail.com

## List of tested browsers:
Google​ ​Chrome - Version 90.0.4430.212 
Mozilla FireFox 

## List of Libraries used:


    "@testing-library/jest-dom": "^5.12.0", 
     For Unit testing React compoments

    "@testing-library/react": "^11.2.7",
    For Unit testing React compoments

    "@testing-library/user-event": "^12.8.3",-
     For Unit testing React compoments

    "axios": "^0.21.1", 
    - For Making API calls

    "bootstrap": "^4.1.3", - 
    For Responsive CSS Design

    "moment": "^2.29.1", - 
    For formatting Date for blog posts

    "react": "^17.0.2", -
     Framework for Developing App

    "react-dom": "^17.0.2",
     - For Unit testing React components

    "react-moment": "^1.1.1",
    For formatting Date for blog posts

    "react-redux": "^7.2.4",
    For State management in React App

    "react-router-dom": "^5.2.0",
     For State management in React App

    "react-scripts": "4.0.3",
    For Running the project in node server

## List of Source Code Files:

Components folder will contain the Different Views for 
1. Create Post
2. List of Posts
3. Deleting ALl Posts
4. Header component
5. Edit/Delete Post
6.  View Post

Redux folder will contain logic for handeling API calls and managing state. It will contain -

1. Actions to invoke API calls and send async response to reducers via thunk
2. Reducer to impact state without any side effects

## Available Scripts


System Requirements:

1. A computer with Chrome/Firefox as Internet browser
2. Node JS Latest version installed.

## Steps to run the project:

1. Clone the project the system.
2. Navigate in the project directory and type 'npm install'
3. Launch the project by 'npm start'


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

