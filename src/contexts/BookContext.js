import { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  // use local storage to set the books each time the date changes
  /* define a callback function as the third argument to the useReducer function and set the initial
     state to whatever is stored in local storage */
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    // check if data exists, if it does, convert the data to JSON by using the JSON.parse() method
    // if it doesn't exists, set it to an empty array and return the result
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    /* at the first render, store whatever is in the books variable in 
    local storage and also when the component updates */
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{books, dispatch}}>
      { children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;
