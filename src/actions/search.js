import { SEARCH_CHANGE_VALUE, SEARCH_FETCH_ERROR, SEARCH_FETCH_LOADING, SEARCH_FETCH_SUCCESS, CHOISE_CITY, LOADING_CITIES, FETCH_CITY_LIST } from '../constants'

export const changeValue = value => {
    return {
        type: SEARCH_CHANGE_VALUE,
        value
    }
}

export const searchHasErrored = bool => {
    return {
      type: SEARCH_FETCH_ERROR,
      bool
    }
  }
  
  export const searchIsLoading = bool => { 
    return {
      type: SEARCH_FETCH_LOADING,
      bool
    }
  }
  
  export const searchFetchDataSuccess = data => {
    return {
      type: SEARCH_FETCH_SUCCESS,
      data
    }
  }

  export const searchCity = () => {
      return {
          type: LOADING_CITIES
      }
  }

  export const choiseCity = () => {
    return {
      type: CHOISE_CITY
    }
  }
  
  export const searchFetchData = () => {
    return dispatch => {
      dispatch(searchIsLoading(true))

        fetch(FETCH_CITY_LIST)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
  
          dispatch(searchIsLoading(false))
  
          return response;
        })
        .then(response => response.json())
        .then(data => dispatch(searchFetchDataSuccess(data)))
        .catch(() => dispatch(searchHasErrored(true)));
    }
  }