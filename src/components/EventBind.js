import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
    ClickHandler()
    {
        this.setState({
            message: 'GoodBye!'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.ClickHandler.bind(this)}>Click</button>
                {/*<button onClick={() => this.ClickHandler()}>Click</button>*/}
            </div>
        )
    }
}

export default EventBind
