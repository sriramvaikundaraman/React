import React, {Component} from 'react'

class Click extends Component{

    constructor(){
        super()
        this.state = {
            message: "Please subscribe"
        }
    }

    messageChanger(){
        this.setState({
            message:"Thanks for subscribing!"
        })
    }

    render(){
        return(<div><h3>{this.state.message}</h3>
        <button onClick={()=>this.messageChanger() }>Subscribe</button>
        </div>)
    }
}

export default Click