import React from 'react';
// import { Counter } from './features/counter/Counter';
import { TypeDropdown } from './features/dropdown/TypeDropdown';
import { ShowListing } from './features/listing/Listings';
import './styling/styles.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Hotels near you</h4>
        {/* <Counter /> */}
        <TypeDropdown />
      </header>
      <div class="listing-container">
        <ShowListing />
      </div>
    </div>
  );
}

export default App;
