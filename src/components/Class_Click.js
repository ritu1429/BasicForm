import React, { Component } from 'react'

 class Class_Click extends Component {

    ClickHandler()
    {
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
               <button onClick={this.ClickHandler}>Clickme</button> 
            </div>
        )
    }
}

export default Class_Click
