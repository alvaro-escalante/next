import Head from 'next/head'

export default() => pug`
  Head
    title Why Use React JS
    meta(name='description', content='An opensource framework delivering fast, efficient and rich web applications with a variety of out the box developer tools.')
  h1 Why use React
  p
    | The main advantage of React is how it updates the Document Object Model (DOM). Traditionally, web applications deal with the structure of the DOM directly, which is very slow. React creates a virtual DOM that will only update when required, making it fast and ideal for Single Page Applications.
  p
    | Another great advantage of React is that it can be run on the server, thanks to its built-in server side rendering capabilities. This delivers a number of advantages:
  ul(class='standard')
    li
      | Server side rendering enables Google to crawl and index effectively, enabling SEO optimisation.
    li
      | Components can be reused and combined within React, keeping the code modular and flexible. This allows you to easily create interfaces and to efficiently manipulate the application state.
  p Additional advantages include:
  ul(class='standard')
    li
      | React is made of components with their own state that can be put together to build complex user interfaces.
    li
      | React also offers ‘React Native’, a technology that enables you to create mobile applications effortlessly for both Android and IOS.
  img(class='end-pic', src='./static/img/react-render.jpg', alt='React Server Side rendering')`
