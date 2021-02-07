import React from 'react';
import { Link } from 'react-router-dom';

import path from '../../routers/index.js';

import './styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div id="Sidebar" className="container-fluid">
      <div className="row justify-content-center">
        <nav className="col-3 sidebar">
          <div className="position-sticky pt-3">
            <ul className="nav-flex-column">
              <li className="nav-item">
                <h2 className="nav-link">ToDo App</h2>
              </li>
              <hr />
              <li className="nav-item">
                <Link to={path.home} style={{ textDecoration: 'none'}}>
                  <h4 className="nav-link">Home</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={path.add} style={{ textDecoration: 'none' }}>
                  <h4 className="nav-link">Add Todo</h4>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;