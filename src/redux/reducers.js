import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE
  } from './actions';
  
  const initialState = {
    services: [],
    loading: false,
    error: null
  };
  
  export const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SERVICES_REQUEST:
        return { ...state, loading: true };
      case FETCH_SERVICES_SUCCESS:
        return { ...state, loading: false, services: action.payload };
      case FETCH_SERVICES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  