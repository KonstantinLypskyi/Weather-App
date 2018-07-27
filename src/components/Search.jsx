import React from 'react'

const Search = ({ value, changeValue, handleSubmit, cities, searchCity, weatherFetchData, choiseCity }) => {
    const citiesList = cities.slice(0, 5).map(city => {
        return <div className='weather__cities flex align-items' key={city.id} onClick={() => {
            weatherFetchData(city.id)
            choiseCity()
        }}>
              <img className='map__icon' src='./images/map_icon.png' alt='icon'/>
              <p className='weather__cities-city'>{city.name}</p>
              <p className='weather__cities-country'>{city.country}</p>
            </div>
    })
    return (
        <form className='weather__form' onSubmit={handleSubmit}>
            <input 
              className='weather__input'
              placeholder='Start typing your location'
              value={value}
              onChange={event => {
                changeValue(event.target.value)
                searchCity()
              }}
             />
             { citiesList.length ? <div className='cities__list'>{citiesList}</div> : null}
        </form>
    )
}

export default Search