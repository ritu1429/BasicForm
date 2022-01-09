import React,{Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state={
            Message: 'welcome to visiter'
        }
    }
    ChangeMessage(){
        this.setState({Message:'Thank You For Subscribing'})
    }
    
    render(){
        return(
        <div>
        <h1>{this.state.Message}</h1>
        <button onClick={()=>this.ChangeMessage()}>Subcribe</button>
        </div>
        )
        }
}
export default Message