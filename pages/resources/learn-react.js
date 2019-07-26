import App from '../../components/App'
import Link from 'next/link'
import Head from 'next/head'

export default() => pug`
App
  Head
    title Learn React JS
    meta(name='description', content='A collection of resources to help you get started in building your first web application with React JS.')
  h1 Documentation
    ul(class='resources')
      li
        a(target='_blank', href='https://facebook.github.io/react/docs/hello-world.html', rel='noopener', aria-label='React Offical') React Offical Get started guide
      li
        a(target='_blank', href='https://github.com/enaqx/awesome-react', rel='noopener', aria-label='Awesome React') Awesome React
      li
        a(target='_blank', href='https://github.com/facebook/react/wiki/Complementary-Tools', rel='noopener', aria-label='Complementary Tools') Complementary Tools
      li
        a(target='_blank', href='https://scotch.io/tutorials/learning-react-getting-started-and-concepts', rel='noopener', aria-label='Learning React') Learning React.js
      li
        a(target='_blank', href='http://buildwithreact.com/tutorial', rel='noopener', aria-label='Buildwithreact') Build with react
      li
        Link(href='/resources/learn-react/next-steps') Next Steps`