Quick start

In the project directory, you can run:

npm i

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view in the browser.

The page will reload if you make edits.

The tech stack is:

- HTML5
- CSS3
- Flexbox
- Sass(scss)
- BEM methodology
- JS ES6
- React JS
- React-router-dom
- Redux
- Redux-thunk
- REST API
- ESLint
- npm
- prop-types
- moment.js
- qs


Link on page:
https://determined-hamilton-4a7c34.netlify.app

Author Alexei Pylypchuk

Description of the project's functionality:

1. On the main screen, there is an entry field for the flight number and two buttons "Departures" and "Arrivals".
2. By clicking on the "Departures" button, all flights for today that depart from the airport are shown. The list is displayed below the buttons. In this case, the "Departures" button is highlighted as selected.
3. By clicking on the "Arrivals" button, all the flights for today that arrive at the airport are shown. The list is displayed below the buttons. In that, the "Arrivals" button must be highlighted as the selected.
4. You can see an example of how the application works and styles here.  https://iev.aero/departures                                                                                                                                            5. If you enter the flight number (in the B2848 format) in the input field and click on the "Search" button, this flight will be displayed in the "Departures" list under the buttons if such a flight leaves the airport today. In this case, the "Departures" button must be active. If the flight is not found, the text No flight is shown instead of the list.
6. After viewing the desired flight in the list of departing flights ("Departures"), the user can click the "Arrivals" button and then this flight will be displayed in the list of arriving flights for today, if it is still on schedule. The "Arrivals" button should become highlighted as selected.
7. The text from the search field is stored in the query params.