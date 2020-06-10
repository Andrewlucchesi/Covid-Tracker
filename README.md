# Covid-Tracker
Welcome to Covid-Tracker! Our app seeks to provide comprehensive information about the novel Coronavirus tracking the progress of the virus throughout the world. Covid-Tracker allows users to self-report a case and accompanying symptoms. The app also displays information about cases throughout the world, most common reported symptoms, and even allows users to find testing locations near them. To get started, install the following packages:

### Install Node.js:
```
brew install node
```
(Windows Users : download Node.js installer from https://nodejs.org/en/download/)

### Package Managers needed to run this app:
 (Note: Running 'npm install' once should install all required packages) 

1. HTTP client for the browser and node.js:
   ```
   npm i axios
   ```

2. DOM bindings for React Rooter:
   ```
   npm i react-router-dom
   ```

3. Redux:
   ```
   npm i redux
   ```

4. React-Redux, wrapper that allows react to interact with redux store easily:
   ```
   npm i react-redux
   ```

5. Redux-thunk, middleware that allows asynchronous actions:
   ```
   npm i redux-thunk
   ```
   
6. Redux bindings for Firebase to use with React:
   ```
   npm i react-redux-firebase
   ```

7. Google Map React component to display map:
   ```
   npm i google-maps-react
   ```

8. React wrapper for Chart.js used for the Pie Chart in report page:
   ```
   npm i react-chartjs-2
   ```

### To run this app:
```
cd covid-tracker
npm install
npm start
```
