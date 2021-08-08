import React from 'react';
import { TypeDropdown } from './features/dropdown/TypeDropdown';
import ShowListing from './features/listing/Listings';
import Sorting from './features/sorting/Sorting';
import './styling/styles.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Hotels near you</h4>
        <div>
          <Sorting />
          <TypeDropdown />
        </div>
      </header>
      <div className="listing-container">
        <ShowListing />
      </div>
    </div>
  );
}

export default App;
