import React, { Component } from 'react'
import { inspect } from 'util'
import Nav from './Nav'
import Link from 'next/link'
import '../static/scss/styles.scss'

export default class Layout extends Component {


  state = {
    mobileActive: false,             // Mobile menu hidden
    width: global.innerWidth <= 950 // Width is less or equal to Desktop 
  }

  componentWillMount() {
    global.onscroll = () => this.handleParallax()
    global.onresize = () => this.handleResize()
  }

  componentDidMount() {
    this.setState({ width: global.innerWidth <= 950})
  }

  // toggle mobile menu, Check that mobile width is true
  handleMobile = () =>
    this.setState({ mobileActive: !this.state.mobileActive })

  // Set Parallax effect
  handleParallax = () =>  
    this.setState({ parallax: { backgroundPosition: `50% ${(global.pageYOffset * 0.5)}px`}})
  
  // Toggle mobile menu and check width
  handleResize = () => 
    this.setState({ mobileActive: false, width: global.innerWidth <= 950})

  render() {
    const { mobileActive, width, parallax } = this.state
    return(
      <div>
        <div class='header module' style={parallax}>
          <Link href='/'> 
            <a class='logo' aria-label='React Logo'></a>
          </Link>
          <span class='title'>React Server Side Rendering</span> 
        </div>
        <div class='wrapper'>
          <Nav 
            width={width} 
            mobileActive={mobileActive} 
            handleMobile={this.handleMobile}
          />
          <div id='cont' class='container'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}