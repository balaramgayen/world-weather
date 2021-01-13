import React, { Component } from 'react';
import './css/body.css';

// my API key : 96252dec9c05de24a0b216615e8d7777

//dinesh: 8284bb913b8222a688b72546dc36f5d0
//url: http://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=96252dec9c05de24a0b216615e8d7777
// url: http://api.openweathermap.org/data/2.5/forecast?q=kolkata&units=metric&appid=96252dec9c05de24a0b216615e8d7777

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
                                        <h5 className="text">Real Feel 27<span>&#8451;</span></h5>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

                <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                        <div class="card secContainer">
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Today Weather in <b>Kolkata</b></h2>
                                        <h2 className="temp2">26<span>&#8451;</span></h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <hr></hr>
                                        <h3><i class="fa fa-thermometer-full" aria-hidden="true"></i> Max Temperature: <span className="float"><span>26</span><span>&#8451;</span></span></h3>
                                        <hr></hr>
                                        <h3><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> Min Temperature<span className="float"><span>24</span><span>&#8451;</span></span></h3>
                                        <hr></hr>
                                        <h3><i class="fa fa-eye" aria-hidden="true"></i> Visibility<span className="float"><span>2.5</span> km</span></h3>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <hr></hr>
                                        <h3><i class="fa fa-arrow-down" aria-hidden="true"></i> Pressure<span className="float"><span>1016</span> mb</span></h3>
                                        <hr></hr>
                                        <h3><i class="fa fa-tint" aria-hidden="true"></i> Humidity<span className="float"><span>73</span> %</span></h3>
                                        <hr></hr>
                                        <h3><i class="fa fa-flag" aria-hidden="true"></i> wind<span className="float"><span>2.3</span> km/h</span></h3>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Body;