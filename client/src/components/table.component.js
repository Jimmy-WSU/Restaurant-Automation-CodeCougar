import React, { Component } from "react";


export default class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Table1: false,
          Table2: false,
          Table3: false,

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
    
      render() {
        return (
          <form>
            <label>
              Table1:
              <input
                name="Table1"
                type="checkbox"
                checked={this.state.table1}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Table2:
              <input
                name="Table2"
                type="checkbox"
                checked={this.state.Table2}
                onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                Table3:
              <input
                name="Table3"
                type="checkbox"
                checked={this.state.Table3}
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
    