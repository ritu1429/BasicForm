import React,{Component} from "react";
class Form extends Component{
    constructor() {
      super();
    
      this.state = {
         Data:[]
      }
    }
    handleSubmit=(e)=>{
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
    
    render(){
        let info=this.state.info;
      return(
        
         <div>
         <form ref="myForm" align="left">
         
           <label>Name</label>
           <input type="text" ref="txtName" placeholder='Enter Your Name'/>
           
           <br></br>
           
           <label>Age</label>
           <input type="text" ref="txtAge" placeholder='Enter Your Age'/>
           
           <br></br>
           
            <button onClick={e=>this.handleSubmit(e)}>submit</button>
            
         </form>
         <table>
         <tr>
           <th>Name</th>
           <th>Age</th>
         </tr>
         {
             
           info.map((data,i)=>
           <tr key={i}>
             <td>{data.name}</td>
             <td>{data.age}</td>
           </tr>
           )
         }
         </table>
        </div>
     
      )}
  }
  export default Form;
  