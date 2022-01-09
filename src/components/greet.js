import React from "react";


//function Greet()
//{
  //  return<h1>Hello World..!!!</h1>
//}

//const Greet = () => <h1>Hello world!!</h1>

const Greet = ({name,surname}) => 
{
    //console.log(props)
    return<h1>hello...{name} {surname}</h1>
}

export default Greet