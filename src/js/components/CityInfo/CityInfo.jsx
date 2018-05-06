import React, { Component } from 'react';

export default class  extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            city,
            icon,
            lat = '',
            lon = '',
            temperature,
            pressure,
            humidity,
            lowTemp,
            highTemp,
            windSpeed,
            error,
            firstRender,
            pending
        } = this.props;

        let snippet;

        if (firstRender && !pending) {
            snippet = (
                <div className='col-6'>
                    <div className='card border border-primary mb-3'>
                        <div className='card-header alert-primary'>City Information</div>
                        <div className='container'>
                            <div className='jumbotron-fluid text-center'>
                                <h1 className='display-3'>Please Enter A City</h1>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (error) {
            snippet = (
                <div className='col-6'>
                    <div className='card border border-primary mb-3'>
                        <div className='card-header alert-primary'>City Information</div>
                        <div className='container'>
                            <div className='jumbotron-fluid text-center'>
                                <h1 className='display-3'>No Data To Display</h1>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (pending) {
            snippet = (
                <div className='col-6'>
                    <div className='card border border-primary mb-3'>
                        <div className='card-header alert-primary'>Pending...</div>
                    </div>
                </div>
            );
        } else {
            snippet = (
                <div className='col-6'>
                    <div className='card border border-primary mb-3'>
                        <div className='card-header alert-primary'>City Information</div>
                        <div className='container'>
                            <div className='jumbotron-fluid text-center'>
                                <h1 className='display-3'>
                                    <img src={'https://openweathermap.org/img/w/' + icon + '.png'} />
                                    {city}
                                </h1>
                                <p className='lead'>{`Lat: ${lat}, Lon: ${lon}`}</p>
                                <hr className='my-4'/>
                                <div className='row mb-4 ml-1 mr-1'>
                                    <div className='col-4'>
                                        <p className='h6 font-weight-bold'>Temperature</p>
                                        <p className='h5 text-success'>{temperature}</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='h6 font-weight-bold'>Pressure</p>
                                        <p className='h5 text-success'>{pressure}</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='h6 font-weight-bold'>Humidity</p>
                                        <p className='h5 text-success'>{humidity}</p>
                                    </div>
                                </div>
                                <div className='row mb-4 ml-1 mr-1'>
                                    <div className='col-4'>
                                        <p className='h6 font-weight-bold'>Lowest Temp(F)</p>
                                        <p className='h5 text-success'>{lowTemp}</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='h6 font-weight-bold'>Highest Temp(F)</p>
                                        <p className='h5 text-success'>{highTemp}</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='h6 font-weight-bold'>Wind Speed</p>
                                        <p className='h5 text-success'>{windSpeed}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return snippet;
    }
}