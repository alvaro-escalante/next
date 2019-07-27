import React, { Component } from 'react'
import Links from './Links'
import { caps, select, stripSlash, listen } from './Functions'
import router from 'next/router'

const pages = ['introduction', 'what', 'why', 'background', 'resources', 'builtvisible']

export default class Nav extends Component { 

  state = {
    mobileMenu: false,
    menuOpen: false
  }

  componentDidMount() {
    this.setState({ mobileMenu: window.innerWidth <= 950 })
    listen('on', window, 'resize', this.handleResize)
  }

  componentWillUnmount() {
    listen('off', window, 'resize', this.handleResize)
  }

  // toggle mobile menu, Check that mobile width is true
  mobileToggle = () => this.setState({ menuOpen: !this.state.menuOpen })
  
  // // Toggle mobile menu and check width
  handleResize = () => this.setState({ menuOpen: false, mobileMenu: global.innerWidth <= 950 })

  render() {

    const {mobileMenu, menuOpen} = this.state

    return(
    <div class='nav-wrap'>
    { mobileMenu ? 
      <div>
        <div class='nav-trigger' onClick={this.mobileToggle}> <span></span> </div>
        <span class='current'>
          {router.pathname  === `/` ? pages[0] : stripSlash(router.pathname)}
        </span>  
      </div> 
    : null }
      <div 
        onClick={this.mobileToggle}
        class={mobileMenu && menuOpen? `nav-mobile` : `nav hide`}>
        { pages.map(page => 
          <Links href={page === `introduction` ? `/` : `/${page}`} as={page} key={page}>
            {caps(page)}
          </Links>
        )}
      </div>
    </div>
    )
  }
}