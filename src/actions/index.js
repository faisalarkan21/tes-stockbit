
import { notify } from 'reapop';

import * as api from '../middleware/api';
import * as types from '../constants/ActionTypes';



/**
 *  Loading action
 * @param {*} bool loading parameter true or false
 *
 */

export const loadIsLoading = bool => ({
  type: types.IS_LOADING,
  payload: bool,
});

/**
 *  Action fetch if error occurred
 * @param {*} bool loading parameter true or false
 *
 */

export const loadIsFetchError = errorCode => ({
  type: types.FETCH_ERROR,
  errorCode,
});


/**
 *  Fetch API
 * @param {*} value response api
 *
 */

const fetchApiTown = (data, status) => ({
  type: types.GET_TOWN_CAPITAL,
  data,
  status,
})
;


export const loadGetTown = (capital) => async (dispatch) => {
  const res = await api.fetchApi(`${capital}`);
  dispatch(loadIsLoading(true))
  if (res.status === 200) {
   
    dispatch(fetchApiTown(res.data, res.status));

  } 
  dispatch(loadIsLoading(false))
     
 
};

