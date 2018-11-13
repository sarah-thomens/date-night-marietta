# Neighborhood Map Project - Date Night Marietta
##### By: Sarah Thomens

## How to Install and Run Project
To install and run this project:
* Install all project dependencies with `npm install -g create-react-app`
* Start the development server with `npm start`

To Run ServiceWorker:
* The service worker was included with the react build.
* This service worker will only run in build mode.
* To work:
	1. `npm run build` - to run the project from a build
	2. `npm install -g serve` (might have to use sudo for this) - to install a global server
	3. `serve -s build` - to run said server

## Project To-Do's
###### Map
- [x] Get Google Maps API Key
- [x] Include key in project
- [x] Have a full-screen map in the application
- [x] The map API should be called only once
- [x] Display a neighborhood by default (Marietta, Georgia)

###### Markers
- [x] Display at least 5 map markers of places in the neighborhood
- [x] Markers should display by default when app is loaded
- [x] Clicking a marker will show information about the place
- [x] Marker should animate in some way when clicked or selected on list

###### List
- [x] Implement a list view of the marker locations
- [x] Clicking a list item will show information about the place

###### Filter
- [x] Provide a filter option (text field or drop-down menu)
	* May NOT use 3rd party API search function
- [x] Filters both the List and Markers
- [x] Should update in real time

###### Third Party API
- [x] Add additional functionality using third-party API's when a map marker is clicked
- [x] Must be different from Google API's
- [x] AJAX requests to third-party server
- [x] All API's should load asynchronously

###### Errors
- [x] Errors should be handled (user should know why something did not work)
- [x] No console errors should be present
- [x] Make sure to include error handling for when browser has trouble initially reaching the API

###### Accessibility
- [x] Focus works correctly
- [x] Site elements are defined semantically or by ARIA roles when no semantic roles
- [x] Images contain alternate text

###### README and Comments
- [x] A README file should be included with steps to run app successfully
- [x] Provide attribution to what is used in project in README file
- [x] Comments are present and well-organized

###### Misc
- [x] The app is intuitive to use
- [ ] The app is responsive (usable on mobile devices)
- [x] The app uses a serviceWorker for offline use
- [x] The app is created using React
- [x] React components are used properly
- [x] State control is managed appropriately
- [x] Project uses git

## Resources Used
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
* This projects uses the Google API's to display a map. Information can be found [here](https://developers.google.com/products/) about the different API's.
* This project uses the Foursquare API to get the venue information. You can find more information [here](https://developer.foursquare.com/)
* Full Stack's google-maps-react component by Ari Lerner was used to help integrate the Google Map API into the React app. The tutorial was extremely helpful in helping to understand how the two work together and how to make the API work in my project.
	* The tutorial is [here](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#)
	* The github with the google-maps-react code is [here](https://github.com/fullstackreact/google-maps-react)
* The hearts tab icon and the map marker icons were found [here](https://icons8.com) by icon8
