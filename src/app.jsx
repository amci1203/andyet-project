import React from 'react';
import { render } from 'react-dom';

import MainNav from './components/main-nav.jsx';
import MainHeader from './components/main-header.jsx';
import Why from './components/why-section.jsx';
import About from './components/about.jsx';

export default class main extends React.Component {
  constructor () {
    super();
  }

  render (props) {
    return(
      <div>
        <MainNav candidateName='Allen McIntosh II' />
        <div id='landing' className='fullscreen'>
          <MainHeader />
          <Why />
        </div>
        <About />
      </div>
    )
  }
}

render(React.createElement(main), document.getElementById('app'))
