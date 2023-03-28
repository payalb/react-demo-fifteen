import React, { Component } from 'react'

export class RefsDemo3 extends Component {

    constructor(props) {
      super(props)

      this.cbref= null; 
      this.setCbRef = (element )=> {
            this.cbref  = element
      }
    }
    
  render() {
    return (
        <div>
        Enter Password: <input type="text" id="pwd" ref= {this.setCbRef}></input>
        <button onClick={this.printValue} >Click!</button>
      </div>
    )
  }

  componentDidMount(){
    if(this.cbref)
    this.cbref.focus();
  }
}

export default RefsDemo3
