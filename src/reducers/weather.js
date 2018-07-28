import { GET_WEATHER_ERROR, GET_WEATHER_LOADING, GET_WEATHER_SUCCESS, CHANGE_LOCATION, CHOISE_CITY, BACKGROUND_COLOR } from '../constants'

const initialState = {
    loading: false,
    error: false,
    changeInputLocation: false,
    temperature: 0,
    background: '',
    data: {
        main: {},
        wind: {},
        weather: [{}]
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_WEATHER_ERROR:
            return { ...state, error: action.bool }
        case GET_WEATHER_LOADING:
            return { ...state, loading: action.loading }
        case GET_WEATHER_SUCCESS:
            return { ...state, data: action.weather, temperature: Math.floor(action.weather.main.temp - 273)}
        case BACKGROUND_COLOR:
            return { ...state, background: action.backgroundColor}    
        case CHANGE_LOCATION:
            return { ...state, changeInputLocation: true }
        case CHOISE_CITY:
            return { ...state, changeInputLocation: false }
        default: 
            return state
    }
}