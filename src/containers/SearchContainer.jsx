import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { changeValue, searchFetchData, searchCity, choiseCity } from '../actions/search'
import { weatherFetchData } from '../actions/weather'
import Search from '../components/Search'

class SearchContainer extends React.Component {
  componentWillMount() {
    document.addEventListener('click', this.unStrike, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.unStrike, false)
  }

  unStrike = event => {
    ReactDOM.findDOMNode(this).contains(event.target) ? null : this.props.choiseCity()
  }

  render() {
    return (
      <Search { ...this.props } />
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