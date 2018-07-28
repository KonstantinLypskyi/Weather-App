import {
    SEARCH_CHANGE_VALUE,
    SEARCH_FETCH_SUCCESS,
    CHOISE_CITY,
    SEARCH_FETCH_LOADING,
    SEARCH_FETCH_ERROR,
    LOADING_CITIES
  } from "../constants"
  
  const initialState = {
    loading: false,
    error: false,
    data: [],
    cities: [],
    value: ""
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_CHANGE_VALUE:
        return { ...state, value: action.value }
      case LOADING_CITIES:
        return {
          ...state,
          cities: state.data.filter(
            item =>
              state.value.length >= 3 ? item.name.includes(state.value) : null
          )
        }
      case SEARCH_FETCH_ERROR:
        return { ...state, error: action.bool }
      case SEARCH_FETCH_LOADING:
        return { ...state, loading: action.bool }
      case SEARCH_FETCH_SUCCESS:
        return { ...state, data: action.data }
      case CHOISE_CITY:
        return { ...state, value: "", cities: [] }
      default:
        return state
    }
  }