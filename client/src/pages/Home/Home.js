import React from 'react';
import { useHistory, Switch, Route, useLocation } from 'react-router-dom';

import HomeTable from './components/HomeTable.js';
import DesktopTable from './components/DesktopTable.js';
import MobileTable from './components/MobileTable.js';
import WebTable from './components/WebTable.js';

import path from '../../routers/index.js';

const Home = _ => {
  const history = useHistory();
  const location = useLocation();

  const handleChange = val => {
    history.push(`/${val}`);
  };

  const categorySelected = _ => {
    switch (location.pathname) {
      case '/mobile':
        return 'mobile';
      case '/web':
        return 'web';
      case '/desktop':
        return 'desktop';
      default:
        return '';
    };
  };

  return (
    <div id="Home">
      <div className="d-flex justify-content-between" >
        <h2>Home</h2>
        <form>
          <select
            name="TaskCategory"
            id="TaskCategory"
            className="form-select"
            onChange={e => handleChange(e.target.value)}
            defaultValue={categorySelected()}
          >
            <option value="">All</option>
            <option value="mobile">Mobile</option>
            <option value="web">Web</option>
            <option value="desktop">Desktop</option>
          </select>
        </form>
      </div>

      <Switch>
        <Route path={path.desktop}>
          <DesktopTable />
        </Route>
        <Route path={path.mobile}>
          <MobileTable />
        </Route>
        <Route path={path.web}>
          <WebTable />
        </Route>
        <Route path={path.home}>
          <HomeTable />
        </Route>
      </Switch>

    </div >
  );
};

export default Home;