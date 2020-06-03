# README
Corona-Tracker is an app designed to for reporting real-time Covid-19 statistics as well as too keep track of cases reported by users. The home page displays a map with markers at every country. Users can click on the markers to get case and death counts by country. The statistics are pulled from a Covid-19 api, whose data is updated daily. The testing locations feature allows users to search for a Covid-19 testing location in California by city. The Report Cases feature allows a user to report a confirmed case of Covid-19. Users are asked to report symptoms as well as too enter their city zipcode and country code. At the bottom of the page there is a pie-chart displaying how the most common symptoms. Finally, the Recently Reported Cases feature allows users to view recently reported cases in the past 24 hours. Users are given an option of looking at a map just showing cases reported on the app in the past 24 hours (similar format to the Home page) or two search for cases by city, which will display a table of the last cases (up to ten) reported in that city.

To run the app, it is necessary to install the following packages:

npm install --save axios
npm install --save react-router-dom
npm install --save react-redux-firebase
npm install --save google-maps-react
npm install --sace react-chartjs-2

Enjoy!