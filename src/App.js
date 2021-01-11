import React, { Component } from 'react';
import Body from './components/body';
import Navbar from './components/navbar';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar/>
        <Body/>
      </React.Fragment>
     );
  }
}
 
export default App;