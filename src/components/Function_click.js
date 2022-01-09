import React from 'react'

function Function_click() {

    function ClickHandler()
        {
            console.log('Button Clicked')
        }
    

    return (
        <div>
            <button onClick={ClickHandler}>Click</button>
        </div>
    )
}

export default Function_click
