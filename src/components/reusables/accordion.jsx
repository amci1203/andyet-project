import React from 'react';

export class Panel extends React.Component {
  constructor(props) {
    super();
    this.state = { open: false };
  }

  togglePanel() {
    const newState = this.state.open == 'open' ? false : 'open'
    this.setState({ open: newState });
  }

  render() {
    return (
      <article className='accordion-panel'>
        <span
            className = { `accordion-panel__caret ${this.state.open}` }
            onClick   = { this.togglePanel.bind(this) }
        />
        <span className='accordion-panel__trigger' onClick={this.togglePanel.bind(this)} />
        <h1 className='accordion-panel__heading' >
          { this.props.title }<span>{ this.props.score }</span>
        </h1>
        <div
          className={'accordion-panel__content ' + this.state.open}
          onClick={this.togglePanel.bind(this) }
        >
          { this.props.children }
        </div>
      </article>
    )
  }
}

export function Accordion (props) {
  const isTranslucent = props.translucent ? 'accordion--translucent' : false;
  return (
    <div className={`accordion ${isTranslucent}`}>
      { props.children }
    </div>
  )
}
