// import { createSelector } from 'reselect';

export const flightsListSelector = state => 
  state.flights.flightsList.body;

// export const sortedTasksListSelector = createSelector(
//   [flightsListSelector],
//   (tasksList) => {
//     return tasksList.slice()
//     .sort((a, b) => a.done - b.done);
//   },
// );