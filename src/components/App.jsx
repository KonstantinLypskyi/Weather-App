import React from 'react'

import Header from './Header'
import WeatherContainer from '../containers/WeatherContainer'
import Footer from './Footer'
// import TestContainer from '../containers/TestContainer'

const App = () => {
    return (
        <div className='home'>
          <Header />
          <WeatherContainer />
          <Footer />
        </div>
    )
}

export default App