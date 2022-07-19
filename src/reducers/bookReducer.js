// generate random id function
const generateId = () => Math.floor(Math.random() * 1000);

export const bookReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return [...state,
        {title: action.book.title, author: action.book.author, id: generateId()}];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};