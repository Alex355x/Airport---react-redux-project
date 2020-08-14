import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Flights from './Flights';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import  qs from 'qs';

const Navigation = () => {

    const  { search }  = useLocation();
    const value = qs.parse(search, { ignoreQueryPrefix: true }).search;
    console.log(value + ' navigation 14')

    return (
        <div className="nav-container">
            <BrowserRouter>
                <NavLink 
                to={`/departure${value ? `?search=${value}` : ''}`}
                className='nav-item' 
                activeClassName='nav-item__active'
                >
                <div className='plane'> 
                <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
                DEPARTURES
                </NavLink>
                
                <NavLink 
                
                to={`/arrivals${value ? `?search=${value}` : ''}`}
                className='nav-item' 
                activeClassName='nav-item__active'
                >
                <div className='plane'>
                <FontAwesomeIcon icon={faPlaneArrival} />
                </div>
                ARRIVALS
                </NavLink> 
                
        
                <Switch>
                    <Route path="/:direction">
                        <Flights />
                    </Route>                    
                </Switch>
            </BrowserRouter>
        </div>  
    )
}
export default Navigation;





