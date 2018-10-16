import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";

import rootReducers from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {Provider} from 'react-redux';

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger();
const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware,loggerMiddleware)
)
store.subscribe(()=>console.log(store.getState()));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
