import React, { Component } from 'react'

export class RefsDemo2 extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }
    
    printValue = ()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
        <div>
        Enter Password: <input type="text" id="pwd" ref= {this.inputRef}></input>
        <button onClick={this.printValue} >Click!</button>
      </div>
    )
  }

  componentDidMount(){
    console.log(this.inputRef)
    this.inputRef.current.focus();
  }
}

export default RefsDemo2
