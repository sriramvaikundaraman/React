import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    incrementer(){
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{
        //     console.log(this.state.count)
        // })

        this.setState((prevState, props)=>({
            count: prevState.count+1
        }))
    }

    incrementFive(){
        this.incrementer();
        this.incrementer();
        this.incrementer();
        this.incrementer();
        this.incrementer();
    }
    

  render() {
    return (
      <div>
        <h2>Count value -{this.state.count} </h2>
        <button onClick={()=> this.incrementer()}>Increase counter</button><br></br><br></br>
        <button onClick={()=> this.incrementFive()}>Increase counter Five Times</button>

      </div>
    )
  }
}

export default Counter
