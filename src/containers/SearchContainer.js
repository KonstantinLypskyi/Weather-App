import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {
  changeValue,
  searchFetchData,
  searchCity,
  choiseCity
} from '../actions/search'
import { weatherFetchData } from '../actions/weather'
import { capitalizeFirstLetter } from '../helpers'
import Search from '../components/Search'

class SearchContainer extends React.Component {
  componentWillMount() {
    document.addEventListener('click', this.unStrike, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.unStrike, false)
  }

  unStrike = event => {
    ReactDOM.findDOMNode(this).contains(event.target)
      ? null
      : this.props.choiseCity()
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return <Search {...this.props} handleSubmit={this.handleSubmit} />
  }
}

const mapStateToProps = state => {
  return {
    value: capitalizeFirstLetter(state.search.value),
    cities: state.search.cities
  }
}

export default connect(mapStateToProps, { changeValue, searchFetchData, weatherFetchData, searchCity, choiseCity })(SearchContainer)