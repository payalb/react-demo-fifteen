import React, { Component } from 'react'

export class RefsDemo extends Component {
  render() {
    return (
      <div>
        Enter Name: <input type="text" id="name"></input>
      </div>
    )
  }

  componentDidMount(){
        document.getElementById("name").focus();
  }
}

export default RefsDemo

