import { withRouter } from 'next/router'

export default withRouter(({ children, router, href }) => {

  const stripSlash = str => str.replace(/^\//, '').split('/')[0],
        classState = stripSlash(router.pathname) === stripSlash(href) ? 'active' : '',

  handleClick = e => {
    e.preventDefault()
    router.push(href)
  }
  
  return <a href={href} onClick={handleClick} className={classState}>{children}</a>

})