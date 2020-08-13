import React from 'react';
import TableHead from "./TableHead";
import moment from "moment";

const FlightsList = ({flights}) => {
//   console.log(flights)
    const fligtsListDirectionMapped = flights.map(el => {
        
        let status = el.status === "DP"
                    ? "Departed"
                    : "Landed";
        
        let timeShedule = el.status === "DP"
            ? moment(el.timeDepShedule).format("h:mm")
            : moment(el.timeArrShedule).format("h:mm");
        
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
                {`${status} ${moment(el.timeLandFact).format("h:mm")}`}
            </td>
            <td className="information-container">
                <img
                    className="company-name__logo"
                    src={`https://api.iev.aero${el.codeShareData[0].logo}`}
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

    if (fligtsListDirectionMapped.length === 0) {
        return (    
            <div className='noFlights'>NO FLIGHTS</div>
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





// import React, { Component } from 'react';
// import moment from 'moment';

// const FlightsList = ({ flights }) =>  {
  
//   const fligtsListDirectionMapped = flights.map(el => {
//       let status = el.status === 'DP' ? 'Departed' : 'Landed';

//         return (
//       <tr className="information-container_body" key={el.ID}>
//           <td className="information-container">{el.term}</td>
//           <td className="information-container">{moment(el.timeLandFact).format('h:mm')}</td>
//           <td className="information-container">{(el["airportToID.city_en"] || el["airportFromID.city_en"])}</td>
//           <td className="information-container">{`${status} ${moment(el.timeLandFact).format("h:mm")}`}</td>
//           <td className="information-container">
//           <img
//               className="company-name__logo"
//               src={`https://api.iev.aero${el.codeShareData[0].logo}`}
//               alt="company-logo"
//           />
//           {el.airline.en.name}          
//           </td>
//           <td className="information-container">{el.codeShareData[0].codeShare}</td>
//       </tr>)
//   })
  
//     return (
//       <div className="tabs-container">
//       <table className="table">
//           <thead>
//             <tr className="information-container">
//                 <th className="information-container terminal">Terminal</th>
//                 <th className="information-container local-time">Local time</th>
//                 <th className="information-container destination">Destination</th>
//                 <th className="information-container status">Status</th>
//                 <th className="information-container airline">Airline</th>
//                 <th className="information-container flight">Flight</th>
//             </tr>
//           </thead>
//       <tbody>
//         {fligtsListDirectionMapped}
//     </tbody>
//     </table>
//     </div>
//     )
//   }



// export default FlightsList;