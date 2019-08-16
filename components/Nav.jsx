import React, { useState, useEffect } from 'react'
import Links from './Links' 
import { caps, select, stripSlash, listen } from './Functions'
import router from 'next/router'

const pages = ['introduction', 'what', 'why', 'background', 'resources', 'builtvisible']

export default props => {

  const 
  [mobile, setMobile] = useState(false),
  [menu, setMenu] = useState(false),
  
  // toggle mobile menu, Check that mobile width is true
  mobileToggle = () => setMenu(!menu),
  
  // // Toggle mobile menu and check width
  handleResize = () => {
    setMenu(false)
    setMobile(global.innerWidth <= 950)
  }

  useEffect(() => {
    setMobile(window.innerWidth <= 950)
    listen('on', window, 'resize', handleResize)
  })  

  return <div class='nav-wrap'>
    { mobile ? 
      <div>
        <div class='nav-trigger' onClick={mobileToggle}> <span></span> </div>
        <span class='current'>
          {router.pathname  === `/` ? pages[0] : stripSlash(router.pathname)}
        </span>  
      </div> 
    : null }
      <div 
        onClick={mobileToggle}
        class={mobile && menu? `nav-mobile` : `nav hide`}>
        { pages.map(page => 
          <Links key={page} href={page === `introduction` ? `/` : `/${page}`} as={page} >
            {caps(page)}
          </Links>
        )}
      </div>
    </div>
}