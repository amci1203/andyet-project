import React from 'react';
import { render } from 'react-dom';

import Tabs from './components/reusables/tabs.jsx';

import MainNav from './components/main-nav.jsx';
import MainHeader from './components/main-header.jsx';
import Why from './components/why-section.jsx';
import About from './components/about.jsx';
import Qualifications from './components/qualifications.jsx';
import Skills from './components/skills.jsx';
import Contacts from './components/contacts.jsx';
import Notes from './components/notes.jsx';

export default class main extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <div>
        <MainNav candidateName='Allen McIntosh II' />
        <div id='landing' className='fullscreen'>
          <MainHeader />
          <Why />
        </div>
        <About />
        <section className='page-section page-section--blue'>
          <a name='skills' />
          <h1 className='section-title'>Skills & Qualifications</h1>
          <Tabs>
            <Qualifications title='Qualifications'/>
            <Skills title='Skills'/>
          </Tabs>
        </section>
        <Contacts />
        <Notes />
      </div>
    )
  }
}

render(React.createElement(main), document.getElementById('app'))
