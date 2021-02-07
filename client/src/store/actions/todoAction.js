import axios from 'axios';

import alert from '../../components/Helpers/Alert.js';

const baseURL = 'http://localhost:3005/todo'

const getTodos = _ => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'GET',
        url: baseURL
      });

      return next({ type: 'GET_TODOS', payload: data });
    } catch (err) {
      if (err) return next({ type: 'ERROR' });
    };
  };
};

const addTodo = data => {
  return async next => {
    try {
      const payload = await axios({
        method: 'POST',
        url: baseURL,
        data
      })
      
      alert('success', 'Task has been added.');

      return next({ type: 'ADD_TODO', payload: payload.data });
    } catch (err) {
      if (err) return next({ type: 'ERROR' });
    };
  };
};

const delTodo = id => {
  return async next => {
    try {
      await axios({
        method: 'DELETE',
        url: baseURL + `/${id}`,
      })

      alert('success', 'Task has been deleted.');

      return next({ type: 'DEL_TODO', payload: id });
    } catch (err) {
      if (err) return next({ type: 'ERROR' });
    };
  };
};

const handleLoading = _ => {
  return { type: 'LOADING' };
};

export { getTodos, addTodo, delTodo, handleLoading };