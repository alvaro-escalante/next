import App from '../components/App'
import Head from 'next/head'
import Link from 'next/link'

export default() => pug`
App
  Head
    title React JS Resources
    meta(name='description', content='A collection of useful resources surrounding the topic of React JS.')
  h1 Documentation
  ul.inlinks
    li
      Link(href='/resources/seo')
        a Seo
    li
      Link(href='/resources/learn-react')
        a Learn React
  p
    | Here are some external links to some useful React sites.
  ul.resources
    li
      a(target='_blank', href='https://facebook.github.io/react/', rel='noopener', aria-label='Github') React on Github
    li
      a(target='_blank', href='http://stackoverflow.com/questions/tagged/reactjs', rel='noopener', aria-label='Stackoverflow') React discussion on Stack Overflow`
