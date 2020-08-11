import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Flights from './Flights'

const Navigation = () => {
    return (
        <div className="nav-container">
            <BrowserRouter>
                <button className="nav-item">
                    <NavLink to='/departure' activeClassName='nav-item__active'>DEPARTURES
                    </NavLink>
                </button>

                <button className="nav-item">
                    <NavLink to='/arrivals' activeClassName='nav-item__active'>ARRIVALS</NavLink> 
                </button>
        
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





