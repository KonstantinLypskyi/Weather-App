import { combineReducers } from 'redux'
import weather from './weather'
import search from './search'

export default combineReducers({
  weather,
  search
})