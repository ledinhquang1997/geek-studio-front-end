import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {Provider} from 'react-redux';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
)
store.subscribe(()=>console.log(store.getState()));
sagaMiddleware.run(rootSaga);

store.dispatch({type:"GET_BEST_SELLER_COURSE"});
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
