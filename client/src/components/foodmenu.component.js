import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

  
export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          noodles: false,
          coffee: false,
          steak: false,

        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }
    
      render() {
        return (
          <form>
            <label>
              Noodles $100:
              <input
                name="noodles"
                type="checkbox"
                checked={this.state.noodles}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              coffee $20:
              <input
                name="coffee"
                type="checkbox"
                checked={this.state.coffee}
                onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
              steak $200:
              <input
                name="steak"
                type="checkbox"
                checked={this.state.steak}
                onChange={this.handleInputChange} />
            </label>
            <div>
                <button variant="outline-primary">Submit</button>
                <button variant="outline-primary">Cancel</button>


                    
                </div>
          </form>
        );
      }
  
    }
    
    