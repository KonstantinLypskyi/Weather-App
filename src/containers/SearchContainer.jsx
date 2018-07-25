import React from 'react'
import { connect } from 'react-redux'
import { changeValue, searchFetchData, searchCity, choiseCity } from '../actions/search'
import { weatherFetchData } from '../actions/weather'
import Search from '../components/Search'

class SearchContainer extends React.Component {

  render() {
    const { value, changeValue, cities, searchCity, weatherFetchData, choiseCity } = this.props
    return (
      <Search value={value} changeValue={changeValue} cities={cities} searchCity={searchCity} weatherFetchData={weatherFetchData} choiseCity={choiseCity} />
    )
  }
}

const mapStateToProps = state => {
    return {
        value: state.search.value,
        cities: state.search.cities
    }
}

export default connect(mapStateToProps, { changeValue, searchFetchData, weatherFetchData, searchCity, choiseCity })(SearchContainer)