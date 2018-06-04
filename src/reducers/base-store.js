import * as types from '../constants/ActionTypes';


const initData = {
  capital: '',
  flagImage: '',
};

const callApi = (state = initData, action) => {
  switch (action.type) {
    case types.GET_TOWN_CAPITAL:
      return {
        ...state,
        capital: action.data[0].name,
        flagImage: action.data[0].flag,
        status: action.status,
      };
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export {
  callApi, 
  isLoading
};
