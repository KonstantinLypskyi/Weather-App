import React from "react"

import WeatherContainer from "../containers/WeatherContainer"
import PageBackground from "../containers/PageBackground"
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <PageBackground>
      <Header />
      <WeatherContainer />
      <Footer />
    </PageBackground>
  )
}

export default App
