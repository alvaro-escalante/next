import { withRouter } from 'next/router'
import { select, stripSlash } from './Functions'

export default withRouter(({ children, router, href, key }) => {

	const classState = stripSlash(router.pathname) === stripSlash(href) ? 'active' : '',

  handleClick = e => {
    e.preventDefault()
    router.push(href)  
  }
  
  return <a href={href} onClick={handleClick} class={classState}>{children}</a>
})