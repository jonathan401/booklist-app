import React from 'react';

// contexts
import BookContextProvider from './contexts/BookContext';

// components
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}
export default App;
