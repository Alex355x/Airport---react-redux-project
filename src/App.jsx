import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SearchForm from './flights/components/SearchForm';
import Navigation from './flights/components/Navigation';
import Flights from './flights/components/Flights';

const App = () => {
  return (
    <div className='search-flights'>
      <Provider store={store}>
        <Router>
            <SearchForm />
              <Switch>
                <Route path='/'>
                  <Navigation />
                </Route>
               
            </Switch>
        </Router>
      </Provider>
    </div>  
  );
};

export default App;


