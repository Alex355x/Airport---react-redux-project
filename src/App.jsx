import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SearchFlights from './flights/components/SearchFlights';

const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <Search />
      
            <SearchFlights />
      
      
      
        </Router>
      </Provider>
      
  );
};

export default App;

