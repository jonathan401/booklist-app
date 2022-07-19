import { createContext, useState } from 'react';

// generate random id function
const generateId = () => Math.floor(Math.random() * 1000);

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: 'The Beginning', author: 'Ryan Kirk', id: 1 },
    { title: "World's Edge", author: 'Ryan Kirk', id: 2 },
    { title: 'The Wind and The Void', author: 'Ryan Kirk', id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: generateId() }]);
  };

  const removebook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{books, addBook, removebook }}>
      { children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;
