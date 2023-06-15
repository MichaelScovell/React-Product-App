# React-Product-App

## About the Project
This project contains the code for a react-based product customization application leveraging ThreeJS and OpenAI to enable users to design custom shirts.

This project is following JavaScript Mastery's: Build and Deploy an AI-Powered 3D Website Using React' - [https://www.youtube.com/watch?v=ZqEa8fTxypQ&t=9s&ab_channel=JavaScriptMastery] (Video Link)

### How to use
1. Clone this repository
2. CD to the Client Folder and `npm install` to install the frontend dependencies.
3. CD to the Server Folder  and run `npm install` to install the backend server dependencies.
4. Once installed, within the server directory create an env file and update it with your OpenAI API key (NOTE: an OpenAI account will need to be created first - see API documentation link https://platform.openai.com/docs/api-reference/introduction).
5. Once added, run `npm run start` within the terminal to start the backend server.
6. Within a new terminal instance, cd to the client folder and run `npm run dev` to start the frontend.
7. Once run, you are set to use the application.

### Technologies
Threejs - 3D JavaScript Library used in rendering models
React - Used for creating the frontend app
OpenAI API (Dalle) - Used in enabling users to generate logos and textures for their shirts using Dalle (API Call).
Express - used for creating the backend server and API for interacting with both OpenAI and the client (front end).
Tailwind CSS - Used for styling the application

#### Images of the Application
##### Home Page
![Home Page](https://github.com/MichaelScovell/React-Product-App/assets/77600300/6946ebfd-82bf-4bab-94b8-30a161ffb105)

##### Customization Page (Color, File and AI Picker on left tab)
![Customization Page](https://github.com/MichaelScovell/React-Product-App/assets/77600300/41efaa73-b03d-4319-89aa-c57602e2e6ac)

##### AI Generated Shirt Pattern

