
This app works like [Twitch](https://www.twitch.tv/), which is used by people all over the world to record video on their desktop and stream it live to viewers across the world, so other can view streamer. The application is popular for video gaming.

## Available Scripts

In the project directory api, you can run:

### `npm start`

In the project directory client, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Architecture

The app contains three mains folders: api, client and rtmpserver.

We are using the api folder to store data, in this case, data about streams.

The client folder contains all our React App components.

The rtmpserver folder contains [Node-Media-Server](https://github.com/illuspas/Node-Media-Server) configuration.

## Real Time Messaging Protocol (RTMP)

Use [Open Broadcaster Software (OBS)](https://obsproject.com/fr) and [Real Time Messaging Protocol (RTMP) Server](https://www.adobe.com/devnet/rtmp.html) to broadcast streamers' video inside the application

## React App Component

The application contains a header menu navigation and a button to sign in with Google. The application shows a list of streams, each stream is defined with a title and a description.

If user is not logged in, user can only view a list of all streams and only watch video for a single stream. 

If user is logged in, user can create a new stream, user can edit an existing stream if the user has created it, user can delete a stream if the user has created it.

## Google Authentication API

Use [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/googlescopes) for user identification in the app using outside service provider like Google, Linkedin or Facebook. User authorizes our app to access their information, and then the service provider tells us about the user.

Visit [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/googlescopes) for more information on available Google scopes.

To get our user's email and basic profile information, we are going to use a scope named [Email or Profile](https://developers.google.com/identity/).

### Steps for setting up OAuth

1. Create a new project at console.developers.google.com/
2. Set up an OAuth confirmation screen
3. Generate an OAuth Client ID
4. Install Google's API library
5. Initialize it with the OAuth Client ID

### Google Authentication Component

#### Gapi library

Use a Google Authentication Component. Make sure the libraries gapi get called any time the user clicks on 'Sign-In' button.

How to interact with gapi library ?
We are using getAuthInstance which returns the GoogleAuth object, that has different functions assigned to it that allow us to figure out if the user is signed in thanks to event listener. 
See more on [methods and classes available in gapi library](https://developers.google.com/identity/sign-in/web/reference)

Each time there is a change in OAuth status, we need to update the button to render, with the appropriate onClick events handlers.

#### Redux Architecture Design

The redux store contains a boolean flag OAuth status which is true if the user is signed in and false if not. We are using signIn() and signOut() actions creators to update that OAuth status. In that way,  Google OAuth Components and the other components can have access to that OAuth Status information. 

Make sure that you have installed redux and react-redux

For signIn action creator, I define a type 'SIGN_IN'.
For signOut action creator, I define a type 'SIGN_OUT'.
I import actions creators into GoogleAuth component.

## Redux-Form

Use [Redux-form](https://redux-form.com/8.3.0/) to manage the creation of streams form

### Field

Import Field and reduxForm into the StreamForm component 

In order to use Field, we need to define how to render each field with a property called component.

### Validation and error messages

Use handleSubmit to get all the values of the form. In order to check all the inputs, I define a validate function that is going to return an empty object if inputs are not filled, and it is going to return an object for each invalid field, the object returned is a key-value pair on the object with the name of the field and the error message.

## How to use JSON server package

In the project directory, create a folder api and run:

### `npm init`

Find a file package.json inside the api folder. Now run:

### `npm install --save json-server`

Use [Json server package](https://www.npmjs.com/package/json-server) with RESTful conventions to manipulate streams data. Run on port 3001 json-server and watch db.json file:

### `json-server -p 3001 -w db.json`

Configure script to run json-server into package.json file

## Modal

I insert a div with id modal into public source index.html file and use ReactDOM.createPortal.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Navigation with React Router

The [React-Router-dom](https://www.npmjs.com/package/react-router-dom) ensures navigation into the application.

### Json Server Package

The [Json Server package](https://www.npmjs.com/package/json-server) is required to set up the API server.

### Real Time Messaging Protocol

[Real Time Messaging Protocol](https://www.adobe.com/devnet/rtmp.html)

### Google Authentication API

The app uses [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/googlescopes).

### Redux Dev Tool

Add the [Redux Dev Tool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr).






