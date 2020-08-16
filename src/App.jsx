import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './flights/components/Navigation';
import Flights from './flights/components/Flights';

const App = () => {
    
  return (
    <div className='search-flights'>
      <Provider store={store}>
        <Router>
            <Route path="/">
                <Navigation />
            </Route>
        </Router>
      </Provider>
    </div>  
  );
};

export default App;


