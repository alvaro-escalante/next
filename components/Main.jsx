import React, { Component }from 'react'
import '../static/scss/styles.scss'
import Nav from './Nav'
import { listen } from './Functions'
import Link from 'next/link'

export default class Main extends Component {

  state = { offset: 0 }

  componentDidMount = () => listen('on', window, 'scroll', this.parallaxShift)  

  componentWillUnmount = () => listen('off', window, 'scroll', this.parallaxShift)
  
  parallaxShift = () => this.setState({ offset: window.pageYOffset })

  render() {

    return(
      <div>
        <div class='header module' style={{backgroundPositionY: `${this.state.offset * 0.2}px`}}>
          <Link href='/'> 
            <a class='logo' aria-label='React Logo'></a>
          </Link>
          <span class='title'>React Server Side Rendering</span> 
        </div> 
        <div class='wrapper'>
          <Nav />
          <div id='cont' class='container'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}