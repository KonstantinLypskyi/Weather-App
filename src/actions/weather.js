import { GET_WEATHER_ERROR, GET_WEATHER_LOADING, GET_WEATHER_SUCCESS, CHANGE_LOCATION, URL } from '../constants'

export const weatherHasErrored = bool => {
    return {
      type: GET_WEATHER_ERROR,
      bool
    }
  }
  
  export const weatherIsLoading = bool => {
    return {
      type: GET_WEATHER_LOADING,
      bool
    }
  }
  
  export const weatherFetchDataSuccess = weather => {
    return {
      type: GET_WEATHER_SUCCESS,
      weather
    };
  }

  export const changeLocation = () => {
    return {
      type: CHANGE_LOCATION
    }
  }
  
  export const weatherFetchData = id => {
    return dispatch => {
      dispatch(weatherIsLoading(true));
      
        fetch(URL(id))
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
  
          dispatch(weatherIsLoading(false));
  
          return response;
        })
        .then(response => response.json())
        .then(data => dispatch(weatherFetchDataSuccess(data)))
        .catch(() => dispatch(weatherHasErrored(true)));
    }
  }