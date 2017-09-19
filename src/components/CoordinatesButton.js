// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {


  setCoords = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render() {
    return (<button onClick={this.setCoords}/>)
  }
}
