import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component2 from './componant2'

class App extends React.Component{
  hellotext = 'HELLO REACT JS FROM ROOT COMPONANT.';

  constructor (){
    super()
    this.state = {
      counter : 0,
      disp:"hey "
    }
  }

  incriment=(e)=>{
    //console.log(e)
    this.setState({counter:this.state.counter + 1})
  }

  decrement=(e)=>{
    //console.log(e)
    this.setState({counter:this.state.counter - 1})
  } 


  render(){
    return (
      <div>
      <p>{this.hellotext}</p>
      <Component2 inc={this.incriment} con={this.state} dec={this.decrement}/>
      </div>
    )
  }
}



export default App;
