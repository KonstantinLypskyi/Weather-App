export const GET_WEATHER_LOADING = 'GET_WEATHER_LOADING'
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR'
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const CHANGE_LOCATION = 'CHANGE_LOCATION'

export const SEARCH_CHANGE_VALUE = 'SEARCH_CHANGE_VALUE'
export const SEARCH_FETCH_LOADING = 'SEARCH_FETCH_LOADING'
export const SEARCH_FETCH_ERROR = 'SEARCH_FETCH_LOADING'
export const SEARCH_FETCH_SUCCESS = 'SEARCH_FETCH_SUCCESS'
export const CHOISE_CITY = 'CHOISE_CITY'
export const LOADING_CITIES = 'LOADING_CITIES'

export const URL = (id = 3172797) => `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=6551e6958e4bd25b77e1576db38dce38`
export const FETCH_CITY_LIST = '/api/city.list.min.json'