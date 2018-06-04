import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as notificationsReducer } from 'reapop';

import { callApi, isLoading } from './base-store';


const allReducers = combineReducers({
  callApi,
  isLoading,
  notifications: notificationsReducer(),
});


export default allReducers;
