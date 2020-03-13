import {
  GET_WEATHER_ERROR,
  GET_WEATHER_LOADING,
  GET_WEATHER_SUCCESS,
  CHANGE_LOCATION,
  URL,
  BACKGROUND_COLOR
} from '../constants'

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
  }
}

export const changeLocation = () => {
  return {
    type: CHANGE_LOCATION
  }
}

export const getBackgroundByKey = (data, backgroundColor) => {
  const background = {
    sun: 'linear-gradient(to top, #e85a8a, #faae56)',
    smoke: 'linear-gradient(to top, #141e30, #243b55)',
    clouds: 'linear-gradient(to top, #757f9a, #d7dde8)',
    haze: 'linear-gradient(to top, #37393d, #101b30)',
    dust: 'linear-gradient(to top, #4ca1af, #c4e0e5)',
    snow: 'linear-gradient(to top, #085078, #85d8ce)',
    rain: 'linear-gradient(to top, #2c3e50, #bdc3c7)',
    clear: 'linear-gradient(to top, #8BC34A, rgb(86, 204, 242))',
    thunderstorm: 'linear-gradient(to top, #37391C, #101B55)',
    fog: 'linear-gradient(to top, #fff, rgb(16, 27, 48))',
    mist: 'linear-gradient(to top, rgb(86, 86, 86), rgb(243, 243, 243))'
  }

  backgroundColor = background[data.weather[0].main.toLowerCase()]

  return {
    type: BACKGROUND_COLOR,
    backgroundColor
  }
}

export const weatherFetchData = id => {
  return dispatch => {
    dispatch(weatherIsLoading(true))

    fetch(URL(id))
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(weatherIsLoading(false))

        return response
      })
      .then(response => response.json())
      .then(data => {
        dispatch(weatherFetchDataSuccess(data))
        dispatch(getBackgroundByKey(data))
      })
      .catch(() => dispatch(weatherHasErrored(true)))
  }
}