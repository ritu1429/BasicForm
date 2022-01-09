import React, { Component } from 'react'

export class Project extends Component {

    

    render() {
        let info=this.state.info;
        return (
            <div>
                <div>Form</div>
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
            </div>
        )
    }
}

export default Project
