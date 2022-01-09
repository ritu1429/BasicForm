import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import { Component } from 'react';
import Welcome from './components/welcome';
import Hello from './hello';
import Message from './components/message';
import Counter from './components/counter';
import Function_click from './components/Function_click';
import Class_Click from './components/Class_Click';
import EventBind from './components/EventBind';
import Parent_Component from './components/parent_component';

import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Project_Form from './components/Project_Form';



// import {Route,Switch} from 'react-router-dom'
 









//function App() {
  //return (
   // <div className="App">
    //<Greet/> 
    
    //</div>
  //);
//}
class App extends Component{
 
  render(){
    
    return(
      <div className='App'>
         {/* <Greet name="Ritu" surname="Fadadu"/>
        <Greet name="Krisha" surname="Detroja"/>
        <button>submit</button>
       
        <Welcome name="unnati"/>
         <Hcdello/>
        <Message/>
        <Counter/>
        <Function_click/>
        <Class_Click/>
        <EventBind/>
        <Parent_Component/>   
       
        <UserGreeting/> */}
        {/* <NameList/> */}
       
       <h1>hello</h1>
      
       <Project_Form/>
      
      
       
      </div>
    )
  }
}

export default App;
