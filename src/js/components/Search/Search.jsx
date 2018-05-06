import React, { Component } from "react";
import { updateCity, getWeather } from "./searchActions";
import { addNewHistoryItem } from "../History/historyActions";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.handleQuickClick = this.handleQuickClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleQuickClick(event) {
    const { dispatch } = this.props;
    dispatch(getWeather(event.target.value));
    dispatch(addNewHistoryItem(event.target.value));
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
  }

  handleClick(event) {
    const { dispatch, selectedCity } = this.props;
    dispatch(getWeather(selectedCity));
    dispatch(addNewHistoryItem(selectedCity));
  }

  render() {
    const selectedCity = this.props.selectedCity;

    return (
    
        <div className="col-5 mx-auto">
          <div className="text-center" role="group">
            <button
              type="button"
              className="btn btn-primary border border-secondary"
              value="San Diego"
              onClick={this.handleQuickClick}
            >
              San Diego
            </button>
            <button
              type="button"
              className="btn btn-primary border border-secondary"
              value="New York"
              onClick={this.handleQuickClick}
            >
              New York
            </button>
            <button
              type="button"
              className="btn btn-primary border border-secondary"
              value="Washington"
              onClick={this.handleQuickClick}
            >
              Washington D.C.
            </button>
            <button
              type="button"
              className="btn btn-primary border border-secondary"
              value="London"
              onClick={this.handleQuickClick}
            >
              London
            </button>
            <button
              type="button"
              className="btn btn-primary border border-secondary"
              value="Tokyo"
              onClick={this.handleQuickClick}
            >
              Tokyo
            </button>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Enter a City.."
              value={selectedCity}
              onChange={this.handleInputChange}
              style={{ textAlign: "center" }}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.handleClick}>
                Go!
              </button>
            </span>
          </div>
        </div>
   
    );
  }
}
