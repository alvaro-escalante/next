import React, { useState, useEffect }from 'react'
import '../static/scss/styles.scss'
import Nav from './Nav'
import { listen } from './Functions'
import Link from 'next/link'

export default props => {

  const [offset, setOffset] = useState(0),

  parallaxShift = () => setOffset(window.pageYOffset)
  
  useEffect(() => listen('on', window, 'scroll', parallaxShift))

  return <React.Fragment>
    <div class='header module' style={{ backgroundPositionY: `${offset * 0.2}px` }}>
      <Link href='/'> 
        <a class='logo' aria-label='React Logo'></a>
      </Link>
      <h1 class='title'>Next.js SSR SPA</h1>
    </div> 

    <div class='wrapper'>
      <Nav />
      <div id='cont' class='container'>
        {props.children}
      </div>
    </div>
  </React.Fragment>
}