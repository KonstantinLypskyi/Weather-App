import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { TweenLite } from 'gsap';

const PageBackground = ({ children, backgroundColor }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    TweenLite.to(backgroundRef.current, 0.5, { background: backgroundColor })
  }, [backgroundColor]);

  return (
    <div ref={backgroundRef} className="home">
      {children}
    </div>
  )
}

const mapStateToProps = ({ weather: { background } }) => ({ backgroundColor: background });

export default connect(mapStateToProps, null)(PageBackground);