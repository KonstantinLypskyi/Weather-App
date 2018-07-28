import React from "react"
import { connect } from "react-redux"

class PageBackground extends React.Component {
  render() {
    const { background } = this.props
    return (
      <div className="home" style={{ background }}>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    background: state.weather.background
  }
}

export default connect(mapStateToProps, null)(PageBackground);