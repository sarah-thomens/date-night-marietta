# Neighborhood Map Project - Date Night Marietta
##### By: Sarah Thomens

## How to Install and Run Project
To install and run this project:
* Install all project dependencies with `npm install -g create-react-app`
* Start the development server with `npm start`

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
- [ ] Marker should animate in some way when clicked or selected on list

###### List
- [x] Implement a list view of the marker locations
- [ ] Clicking a list item will show information about the place

###### Filter
- [ ] Provide a filter option (text field or drop-down menu)
	* May NOT use 3rd party API search function
- [x] Filters both the List and Markers
- [ ] Should update in real time

###### Third Party API
- [x] Add additional functionality using third-party API's when a map marker is clicked
- [x] Must be different from Google API's
- [x] AJAX requests to third-party server
- [x] All API's should load asynchronously

###### Errors
- [ ] Errors should be handled (user should know why something did not work)
- [ ] No console errors should be present
- [ ] Make sure to include error handling for when browser had trouble initially reaching the API `(??)`

###### Accessibility
- [ ] Focus works correctly
- [ ] Site elements are defined semantically or by ARIA roles when no semantic roles `(??)`
- [ ] Images contain alternate text

###### README and Comments
- [x] A README file should be included with steps to run app successfully
- [ ] Provide attribution to what is used in project in README file
- [ ] Comments are present and well-organized

###### Misc
- [ ] The app is intuitive to use
- [ ] The app is responsive (usable on mobile devices)
- [ ] The app uses a serviceWorker for offline use
- [x] The app is created using React
- [ ] React components are used properly
- [ ] State control is managed appropriately
- [ ] Project uses git

## Resources Used
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
* Full Stack's google-maps-react component by Ari Lerner was used to help integrate the Google Map API into the React app. The tutorial was extremely helpful in helping to understand how the two work together and how to make the API work in my project.
	* The tutorial is [here](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#)
	* The github with the google-maps-react code is [here](https://github.com/fullstackreact/google-maps-react)
* The hearts tab icon was found [here](https://icons8.com) by icon8
