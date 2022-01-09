import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    

    render() {
    //    if(this.state.isLoggedIn)
    //    {
    //        return(
    //            <div>Welcome Ritu</div>
    //        )
    //    }
    //    else {
    //     return(
    //         <div>Welcome</div>
    //     )
    // }
      
        let message
        if(this.state.isLoggedIn)
        {
            message=<div>welcome ritu</div>
        }
        else
        {
            message=<div>ritu</div>
        }
        return<div>{message}</div>
    }
}

export default UserGreeting
