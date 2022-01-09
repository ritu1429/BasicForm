import React, { Component } from 'react'
import Child_Component from './Child_Component'

class Parent_Component extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }
        this.GreetParent=this.GreetParent.bind(this)
    } 
    GreetParent(){
        alert(`Hello ${this.state.parentName}`)
    }
    
    render() {
        return (
            <div>
             <Child_Component greethandler={this.GreetParent}/>   
            </div>
        )
    }
}

export default Parent_Component
