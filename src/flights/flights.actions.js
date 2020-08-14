import * as fligthsGateway from './flightsGateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS/FLIGHTS_LIST_RECIEVED';
export const SHOW_SPINNER = "SHOW_SPINNER";

export const flightsListRecieved = (flightsList) => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    }
  }
  return action;
}

export const getFlightsList = () => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner())
    fligthsGateway
    .fetchFlightsList()
    .then(flightsList => dispatch(flightsListRecieved(flightsList)))
  };
  return thunkAction;
}


export const showSpinner = () => {
  return {
      type: SHOW_SPINNER,
  }
}


