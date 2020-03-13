import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WeatherContainer from '../containers/WeatherContainer'
import PageBackground from '../containers/PageBackground'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <PageBackground>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <WeatherContainer />
            <Footer />
          </Route>
          <Route exact path="/lol">
            Second page
          </Route>
        </Switch>
      </BrowserRouter>
    </PageBackground>
  )
}

export default App
