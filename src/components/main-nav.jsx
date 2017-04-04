import React from 'react';
import Links from './reusables/nav-links.jsx';

import _ from './helpers/lodash.custom.min';
import _handleScroll from './helpers/scroll-handle';

export default class MainNav extends React.Component {
  constructor () {
    super();
    this.state = {
      isOpen: "close",
      isVisible: 'visible',
    };
    this.scroll = _handleScroll(2);
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

  handleScroll(event) {
      this.scroll(dir => {
          const newState = dir == 'down' ? 'invisible' : 'visible';
          if (this.state.isOpen != 'open') this.setState({isVisible: newState});
      });
  }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.handleScroll.bind(this), 150));
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
              links={['about', 'skills', 'contacts', 'notes']}
              click={() => this.handleLink.bind(this, this.state.isOpen)}
            />
          </div>
        </div>
      </nav>
    )
  }
}
