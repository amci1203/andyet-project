import React from 'react';

export class Panel extends React.Component {
  constructor(props) {
    super();
    this.state = { open: false };
  }

  togglePanel() {
    let newState = 'state';
    if (this.state.open === 'open')  { newState = false }
    else { newState = 'open' }
    this.setState({ open: newState });
  }

  render() {
    return (
      <article className='accordion-panel'>
        <h1 className='accordion-panel__heading' onClick={() => this.togglePanel() }>
          { this.props.title }<span>{ this.props.score }</span>
        </h1>
        <span className={'accordion-panel__caret ' + this.state.open} />
        <div className={'accordion-panel__content ' + this.state.open}>{ this.props.children }</div>
      </article>
    )
  }
}

export function Accordion (props) {
  return (<div className='accordion'>{ props.children }</div>)
}
