import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, getTodos } from '../../../store/actions/todoAction.js';
import Loading from '../../../components/Helpers/Loading.js';
import Error from '../../../components/Helpers/Error.js';

const AddForm = _ => {
  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector(state => state);

  const addTaskHandler = e => {
    e.preventDefault();
    let id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
    let task = document.getElementById('TaskName').value;
    let category = document.getElementById('TaskCategory').value;

    dispatch(addTodo({ id, task, category }));
    dispatch(getTodos());

    document.getElementById('TaskName').value = '';
    document.getElementById('TaskCategory').value = '';
  }

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (isError) return <Error />

  if (isLoading) return <Loading />

  return (
    <div id="AddForm">
      <form onSubmit={addTaskHandler}>
        <label className="pt-3 pb-1" htmlFor="TaskName">Task Name</label>
        <input
          name="TaskName"
          id="TaskName"
          type="text"
          className="form-control"
          placeholder="e.g.: Making Music App"
        />

        <label className="pt-3 pb-1" htmlFor="TaskCategory">Task Category</label>
        < select
          name="TaskCategory"
          id="TaskCategory"
          className="form-select"
        >
          <option value="">All</option>
          <option value="Mobile">Mobile</option>
          <option value="Web">Web</option>
          <option value="Desktop">Desktop</option>
        </ select>

        <button
          type="submit"
          className="btn btn-primary mt-3"
        >Add Task</button>
      </form>
    </div>
  );
};

export default AddForm;