import React, { Component } from 'react'

  class Extra extends Component {

 constructor(props) {
     super(props)

     this.state = {
            user: null,
          password: null,
          Message: 'thankyou',
        
    }
 }
     submit=(e)=>{
    e.PreventDefault();
      let info=this.state.info;
      let name=this.refs.txtName.value;
      let age=this.refs.txtAge.value;
     
      
      let newEmployee ={
        "name":name,
        "age":age
          }
          info.push(newEmployee);
  
          this.setState({
            info:info
          })
          this.refs.myForm.reset();
  
    
        }

     render() {
         return (
             <div>
                 <h1>Form</h1>
                 <div>
                 Username:<input  type="text" name="Username" ref="txtName"
                                 onChange={(e)=>{this.setState({user:e.target.value})}}/>
                 </div>
                 <div>
                    Password:<input  type="password" name="Password" ref="txtName"
                      onChange={(e)=>{this.setState({password:e.target.value})}}/>
                   
                 </div>

                 <button onClick={()=>this.submit()}>Submit</button>
                 <h4>{this.state.Message}</h4>
            </div>
         )
     }
 
    }   
     
 export default Extra;
