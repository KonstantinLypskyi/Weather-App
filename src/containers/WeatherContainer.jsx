import React from "react"
import { connect } from "react-redux"
import Weather from "../components/Weather"
import { searchFetchData } from "../actions/search"
import { weatherFetchData, changeLocation } from "../actions/weather"

class WeatherContainer extends React.Component {
  componentDidMount() {
    this.props.searchFetchData()
    this.props.weatherFetchData()
  }

  render() {
    return <Weather {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather.data,
    changeInput: state.weather.changeInputLocation,
    temperature: state.weather.temperature,
    city: state.search.city,
    data: state.search.data
  }
}

export default connect(mapStateToProps, { weatherFetchData, changeLocation, searchFetchData })(WeatherContainer);