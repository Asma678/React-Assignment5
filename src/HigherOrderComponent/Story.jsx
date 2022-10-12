import React, { Component } from 'react'
import Vip from './Vip'
import '../App.css'

class Story extends Component {
  render() {
    return (
        <div>
            <h2 className='story'>Legend of Blue Sea</h2>
            {this.props.showTooltip && <div className='review'>A great story about fantasy,comedy. worth read it</div>}
        </div>
    )
  }
}

export default Vip(Story);