import React from 'react';
import TableHead from "./TableHead";
import moment from "moment";

const FlightsList = ({flights, isFetching }) => {

    const currentDate = moment().format("YYYY-MM-DD");
    const flightsToday = flights.filter(date => date.actual?.split('T')[0] === currentDate);
    const fligtsListDirectionMapped = flightsToday.map(el => {
        
        let status = el.status === "DP" 
            ? "Departed" : el.status === "LN" 
            ? "Landed" : el.status === "ON" 
            ? "On time" : el.status === "BD" 
            ? "Boarding" : el.status === "CK" 
            ? "Registration" : 'In flight';

        let timeShedule = el.status === "DP"
            ? moment(el.timeDepShedule).format("h:mm") : el.status === "LN" 
            ? moment(el.timeArrShedule).format("h:mm") 
            : 'Exp '+ moment(el.timeToStand).format("h:mm");

        let terminal = el.term === 'A' 
        ? <span className='term term__A'>A</span> 
        : el.term === 'D' 
        ? <span className='term term__D'>D</span>
        : <span className='term term__C'>C</span>

        return (
        <tr className="information-container_body" key={el.ID}>
            <td className="information-container">
                {terminal} 
            </td>
            <td className="information-container">
                {timeShedule}
            </td>
            <td className="information-container">
                {el["airportToID.city_en"] || el["airportFromID.city_en"]}
            </td>
            <td className="information-container">
                {el.status === "DP" || el.status === "LN" 
                ? `${status} ${moment(el.timeLandFact).format("h:mm")}`
                : status}
            </td>
            <td className="information-container logo">
                <img
                    className="company-name__logo"
                    src={el.codeShareData[0].airline.en.logoSmallName}
                    alt="company-logo"
                />
                <span className='airlineName'>
                {el.airline.en.name}   
                </span> 
            </td>
            <td className="information-container">
                {el.codeShareData[0].codeShare}
            </td>
        </tr>)
    })

    if ((fligtsListDirectionMapped.length === 0) && (!isFetching)) {
        return (  
                <div className='noFlights'>NO FLIGHTS</div>
        )
    }
    
    if ((isFetching)) {
        return (  
            <div className="noFlights">
                 <span className="spinner" ></span>
            </div>
        )
    }
    
    return (
        <div className="tabs-container">
            <table className="table">
                <TableHead/>
                <tbody>
                    {fligtsListDirectionMapped}
                </tbody>
            </table>
        </div>
    )
}
export default FlightsList;



