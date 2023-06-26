import React, { Component } from 'react'

export default class Glasses extends Component {
  render() {
    const {glasses} = this.props
    return (
      <div>
        <img src={glasses.url} alt="" />
      </div>
    )
  }
}
