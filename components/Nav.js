import React, { Component } from 'react'
import Links from './Links'
import { caps, select} from './Functions'

const pages = ['introduction', 'what', 'why', 'background', 'resources', 'builtvisible']

export default props => 
<div className='nav-wrap'>
  { 
  	props.width ? 
    <div>
      <div className='nav-trigger' onClick={() => props.handleMobile()}> <span></span> </div>
      <span className='current'>{select('.active').innerText}</span>	
    </div> : null
  }
  <div onClick={() => props.handleMobile()} 
  	className={props.width && props.mobileActive ? `nav-mobile` : `nav hide`}>{
    pages.map(page => 
    	<Links href={page === `introduction` ? `/` : `/${page}`} key={page}>
    		{caps(page)}
    	</Links>
    )}
  </div>
</div>
// .nav-wrap
//   .nav
//     each page in pages
//       Links(href=page === 'introduction' ? '/' : '/'+ page, key=page) 
//         = caps(page)
// ` 