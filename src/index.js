import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import thunk from '../node_modules/redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';



ReactDOM.render(<Provider store={createStore(reducers,applyMiddleware(thunk))}>
 <Router>
<Routes />
</Router>
</Provider>, document.getElementById('root'));