import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducers/RootReducer'; 
import rootSaga from './Sagas/Index';
import { applyMiddleware, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


export default store;
