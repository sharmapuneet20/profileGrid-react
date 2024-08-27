import { createStore } from 'redux';
import jobReducer from './reducers/jobReducer';

const store = createStore(
  jobReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
