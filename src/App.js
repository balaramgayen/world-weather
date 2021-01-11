import React, { Component } from 'react';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <p>API= http://api.openweathermap.org/data/2.5/weather?q=srinagar&units=metric&appid=6e42f8aad1289f88c99285dcc1bf928b</p>
        <h1>API key: 6e42f8aad1289f88c99285dcc1bf928b</h1>
      </React.Fragment>
     );
  }
}
 
export default App;