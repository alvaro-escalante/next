import Head from 'next/head'

export default() => pug`
  Head
    title React JS Communities
    meta(name='description', content='Communities, blogs, feeds and experiments to help deepen your understanding of React JS.')
  h1 Next Steps ...
  ul(class='resources')
    li
      a.twitter-timeline(href='https://twitter.com/reactjs') Tweets by reactjs
  iframe(class='frames', src='https://www.youtube.com/embed/-AbaV3nrw6E', allowfullscreen='', width='560', height='315', frameborder='0')`