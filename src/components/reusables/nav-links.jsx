import React from 'react'

export default class Links extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const links = this.props.links.map((item, index) => {
      return (
        <li className='link' key={index}>
          <a href={'#' + item} onClick={this.props.click() || null}>{item}</a>
        </li>
      )
    })
    return (<ul>{links}</ul>)
  }
}
