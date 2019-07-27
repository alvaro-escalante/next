import Head from 'next/head'

export default() => pug`
  Head
    title React JS SEO Resources
    meta(name='description', content='A round up of useful resources on the application and effects of using React JS for SEO and organic performance.')
  h1 React SEO Links
  ul(class='resources')
    li
      a(target='_blank', href='https://builtvisible.com/react-js-seo/', aria-label='Builtvisible', rel='noopener') Building Search Friendly Javascript Apps
    li
      a(target='_blank', href='http://andrewhfarmer.com/react-seo/', aria-label='Andrewh Farmer', rel='noopener') Will Google find your React content?
    li
      a(target='_blank', href='https://medium.freecodecamp.com/seo-vs-react-is-it-neccessary-to-render-react-pages-in-the-backend-74ce5015c0c9', aria-label='Medium', rel='noopener') SEO vs. React
    li
      a(target='_blank', href='https://builtvisible.com/seo-friendly-react-js-app-architecture-for-multimedia-content/', aria-label='Builtvisible', rel='noopener') Seo Friendly react js app architecture
    li
      a(target='_blank', href='https://builtvisible.com/building-content-in-react/', aria-label='Builtvisible', rel='noopener') Building Content in React
    li
      a(target='_blank', href='https://medium.freecodecamp.com/using-fetch-as-google-for-seo-experiments-with-react-driven-websites-914e0fc3ab1', aria-label='Medium', rel='noopener') Seo experiments with React driven websites`
