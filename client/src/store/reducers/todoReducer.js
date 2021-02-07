const initState = {
  todos: [],
  todo: {},
  isLoading: true,
  isError: false
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'ERROR':
      return { ...state, isLoading: false, isError: true };
    case 'GET_TODOS':
      return { ...state, todos: action.payload, isError: false, isLoading: false }
    case 'ADD_TODO':
      return { ...state, todos: state.todos.concat(action.payload), isError: false };
    case 'DEL_TODO':
      const deleted = state.todos.filter(e => e.id !== action.payload);

      return { ...state, todos: deleted, isError: false };
    default:
      return state;
  };
};

export default todoReducer;