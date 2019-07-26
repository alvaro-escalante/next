import App from '../components/App'
import Head from 'next/head'

export default() => pug`
App
  Head
    title A React JS SEO Experiment by Builtvisible
    meta(name='description', content='An SEO experiment designed and developed by Builtvisible, specialists in organic digital marketing.')
  h1 About Us
  a(target='_blank', href='https://builtvisible.com', rel='noopener', aria-label='Builtvisible')
    img(src='./static/img/organic-digital.jpg', alt='Builtvisible Organic Digital')
  p
    | We are 
    a(target='_blank', href='https://buildvisible.com', rel='noopener', aria-label='Builtvisible') Builtvisible
    | , an agency bringing 
    a(target='_blank', href='https://builtvisible.com/services/', rel='noopener', aria-label='Builtvisible Services') Organic Digital
    |  excellence to bear on some of the world’s most exciting brands. We specialise in search, content and analytics, and deliver highly performant campaigns and solutions to improve the online performance of all our 
    a(target='_blank', href='https://builtvisible.com/our-work/', rel='noopener', aria-label='Builtvisible') clients
    | .
  p
    | Experimentation is a core part of our success as a business. Fuelled by a constant curiosity around how things work, we set up this and other experiments to check facts and build a better understanding of what works on the internet.
  p
    | Our findings end up as part of our 
    a(target='_blank', href='https://builtvisible.com/blog/', aria-label='Builtvisible Blog') blog
    |  or within our 
    a(target='_blank', href='https://builtvisible.com/resources/', aria-label='Builtvisible Resources') resource section
    | . If you like the sound of what we do then please do 
    a(target='_blank', href='https://builtvisible.com/contact/', rel='noopener', aria-label='Builtvisible Contact') get in touch
    | .`
