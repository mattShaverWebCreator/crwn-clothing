import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';


import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer.js';


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

if (process.env.NODE_END === 'development') {
    middlewares.push(logger);
};


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

