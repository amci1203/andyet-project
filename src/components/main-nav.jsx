import React from 'react';
import Links from './reusables/nav-links.jsx';

import _ from './helpers/lodash.custom.min';

export default class MainNav extends React.Component {
  constructor () {
    super();
    this.state = {
      isOpen: "close",
      isVisible: 'visible',
    };
  }

  handleLink(isOpen) {
    if (isOpen === 'open') this.toggleNav();
  }

  toggleNav() {
    let css = "";
    if (this.state.isOpen === "close") css = "open";
    else css = "close";
    this.setState({ isOpen : css });
    document.documentElement.classList.toggle('page-lock')
  }

  handleWheel(event) {
    let direction = event.deltaY > 0 ? 'down' : 'up',
        newState = direction === 'down' ? 'invisible' : 'visible';
    this.setState({isVisible: newState});
  }

  componentDidMount() {
    window.addEventListener('wheel', _.debounce(this.handleWheel.bind(this), 50, {leading: true, trailing: false}));
    if (window.scrollY > 50) this.setState({isVisible: 'invisible'})
  }

  render (props) {
    return (
      <nav className={'main-nav ' + this.state.isVisible}>
        <div className={'wrapper ' + this.state.isOpen}>
          <h1 className='main-nav__heading'><a href='http://allen-mcintoshii.com'>{ this.props.candidateName }</a></h1>
          <button className='main-nav__toggle' onClick={ this.toggleNav.bind(this) } >
            <span className='main-nav__toggle__middle' />
          </button>
          <div className='main-nav__nav-links '>
            <Links
              links={['about', 'skills', 'contacts']}
              click={() => this.handleLink.bind(this, this.state.isOpen)}
            />
          </div>
        </div>
      </nav>
    )
  }
}
