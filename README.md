## React Porfolio
React component for anchor links using the smoothscroll polyfill.

# Instructions
- Install dependency: npm install 

- Add script

import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SmoothScroll = () => (
  <div>
    <AnchorLink href='#things'>Things</AnchorLink>
    <AnchorLink href='#stuff'>Stuff</AnchorLink>

    <section id='things'>
    <h2>Things</h2>
    </section>
    <section id='stuff'>
      <h2>Stuff</h2>
    </section>
  </div>
)

ReactDOM.render(
  <SmoothScroll />,
  document.getElementById('content')
)
Options; offset the amount of pixels from the top, for if you have a sticky navigation.

Regular offset

 <AnchorLink offset='100' href='#things'>Things</AnchorLink>
For responsive offset you can provide a function returning the needed integer to scroll from

 <AnchorLink offset={() => 100} href='#things'>Things</AnchorLink>


