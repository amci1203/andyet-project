import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = { currentTab: 0 };
  }

  isActiveTab (index) { return this.state.currentTab === index ? 'active' : null }
  setActiveTab (index) { this.setState({currentTab: index}) }

  render() {
    let tabTitles = React.Children.map(this.props.children, (child, index) => {
      return (
        <li
          key       = { index }
          className = { this.isActiveTab(index) }
          onClick   = { () => this.setActiveTab(index) }
        >
          {child.props.title}
        </li>
      );
    })
    return (
      <section className='tabs'>
        <div className='wrapper'>
          <ul className='tabs__list'>{tabTitles}</ul>
          <article className='tabs__content'>{this.props.children[this.state.currentTab]}</article>
        </div>
      </section>
    )
  }
}
