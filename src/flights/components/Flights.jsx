import React, { useEffect } from "react";
import { connect } from 'react-redux';
import  qs from 'qs';
import { useParams, useLocation } from 'react-router-dom';
import FlightsList from './FlightsList';
import { flightsListSelector, isFetchingSelector } from '../flights.selectors';
import * as flightsActions from  '../flights.actions';


const Flights = ({ getFlightsList, flightsList, isFetching }) => {

      useEffect(()=> {
        getFlightsList();
      }, []);

    const { direction } = useParams();
    const  { search }  = useLocation();
    
    const flightsListDirection =
        flightsList[direction === 'arrivals' ? 'arrival' : 'departure'] || [];

    const filterText = qs.parse(search, { ignoreQueryPrefix: true }).search;
    //  console.log(filterText)

    const filteredFlights = filterText
        ? flightsListDirection.filter(flight => flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(filterText.toLowerCase()))
        : flightsListDirection;
          // console.log(filteredFlights);
    
              
      
        return (
            <main className="flights">
                <FlightsList
                flights={filteredFlights} 
                isFetching={isFetching}

                />
            </main>
        );
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