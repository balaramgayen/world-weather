import React, { Component } from 'react';
import './css/body.css';

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <input type="text" className="form-control" placeholder="Enter any city name"></input>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <button className="btn">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                        <div id="cardBack" class="card">
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-8 col-sm-8">
                                        <h1 className="text city">kolkata</h1>
                                        <h2 className="temp">26<span>&#8451;</span></h2>
                                        <h2 className="text">haze</h2>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="iconImage"></img>
                                        <h5 className="text">Feels Like 27<span>&#8451;</span></h5>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

                <div className="container mt-3 secContainer">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Today Weather in <span>Kolkata</span></h2>
                            <h1>26<span>&#8451;</span></h1>
                            <h5>Feels Like</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Body;