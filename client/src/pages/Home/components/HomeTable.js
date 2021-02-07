import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodos, delTodo } from '../../../store/actions/todoAction.js';
import Loading from '../../../components/Helpers/Loading.js';
import Error from '../../../components/Helpers/Error.js';

const HomeTable = _ => {
  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector(state => state);

  const handleDelete = id => {
    dispatch(delTodo(id));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (isError) return <Error />

  if (isLoading) return <Loading />

  return (
    <table className="table table-stripped table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>

        {todos?.map(e => {
          return (
            <tr key={e.id} >
              <th>{e.id}</th>
              <td>{e.task}</td>
              <td>{!e.category ? 'All' : e.category}</td>
              <td>
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          )
        })}

      </tbody>
    </table>
  );
};

export default HomeTable;