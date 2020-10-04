import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  qs from 'qs';
import { useParams } from 'react-router-dom';
import FlightsList from './FlightsList';
import { flightsListSelector, isFetchingSelector } from '../flights.selectors';
import * as flightsActions from  '../flights.actions';
import moment from "moment";


const Flights = ({ getFlightsList, flightsList, isFetching, filterText }) => {
  
      useEffect(()=> {
        getFlightsList();
      }, []);

    const { direction } = useParams();
      
    const flightsListDirection =
        flightsList[direction === 'arrivals' ? 'arrival' : 'departure'] || [];
         
    const filteredFlights = filterText
        ? flightsListDirection.filter(flight => flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(filterText.toLowerCase()))
        : flightsListDirection;
        
        return (
            <main className="flights">
                <FlightsList
                flights={filteredFlights} 
                isFetching={isFetching}
                />
            </main>
        );
}

Flights.propTypes = {
  getFlightsList: PropTypes.func.isRequired,
  flightsList: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapState = state => {
    return {
      flightsList: flightsListSelector(state),
      isFetching: isFetchingSelector(state),
    };
};
const mapDispatch = {
    getFlightsList: flightsActions.getFlightsList,

}

export default connect(mapState, mapDispatch)(Flights);