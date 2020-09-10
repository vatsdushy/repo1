import React, { Component } from 'react'
import Greet from './components/greet'
import Para from './components/para'

class App extends Component{
  render(){
    return(  
      <div>
        <Greet user='dushy' />
        <Greet user='harsh' />
        <Para/>
      </div>
    )
    }
  }

export default App