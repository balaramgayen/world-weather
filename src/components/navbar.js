import React, { Component } from 'react';
import './css/navbar.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav id="navbar" class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="#">
                          <h4>Weather World</h4>
                      </a>
                      <div>
                      </div>
                    </div>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default Navbar;