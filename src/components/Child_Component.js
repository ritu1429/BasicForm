import React from 'react'

function Child_Component(props) {
    return (
        <div>
            <button onClick={props.greethandler}>GreetParent</button>
        </div>
    )
}

export default Child_Component
