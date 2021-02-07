import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from './components/Layout/Sidebar.js';

import { Home, Add } from './pages/index.js'
import path from './routers/index.js';

const App = () => {
  return (
    <div className="App">
      <Sidebar />

      <main className="col-9 ms-sm-auto px-md-4" style={{paddingTop: 8}}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">

          <div className="container-fluid">
            <div className="row justify-content-start">

              <Switch>
                <Route path={path.add}>
                  <Add />
                </Route>
                <Route path={path.home}>
                  <Home />
                </Route>
              </Switch>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
