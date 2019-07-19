import React from 'react';
import './App.scss';
import Home from '../src/component/home';
import Settings from '../src/component/setting';
import Profile from '../src/component/profile';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist';
import {persistStore,persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from "redux-persist/lib/storage";
import reducers from '../src/store/reducers';




const persistConfig = {
  key: 'root',
  storage: storage
}
const persistedReducer = persistReducer(persistConfig,reducers);

function App() {

  const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
  const persistor = persistStore(store);

  return (
    <Provider store ={store}>
        <PersistGate persistor={persistor}>
        <Router>
          <div>
            <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/profile/">Profile</Link>
                  </li>
                  <li>
                    <Link to="/settings/">Setting</Link>
                  </li>
                </ul>
            </nav>

            <Route  path="/" exact component={Home} />
            <Route  path="/settings/" component={Settings} />
            <Route  path="/profile" component={Profile} />

            </div>
          </Router>
        </PersistGate>
    </Provider>

  );
}

export default App;
