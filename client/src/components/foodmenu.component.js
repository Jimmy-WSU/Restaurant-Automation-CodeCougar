import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input } from 'antd';
  
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
            <h4>Foodmenu</h4>
            <h5>Table:
            <Input style={{ width: 110 }} placeholder="table number" /></h5>
            <br />
            <label>
              Noodles $100:
              <input
                style={{ width: 20 }}
                name="noodles"
                type="checkbox"
                checked={this.state.noodles}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              coffee $20:
              <input
                style={{ width: 20 }}
                name="coffee"
                type="checkbox"
                checked={this.state.coffee}
                onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
              steak $200:
              <input
                style={{ width: 20 }}
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
    
    