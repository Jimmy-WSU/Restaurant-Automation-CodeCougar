import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RiAddFill } from "react-icons/ri"

  
export default class homepage extends Component {
    render() {
        return (

                
            <form>
                <h3>Foodmenu </h3>
             
                  <Link className="form-control">noodles $20</Link>
                  <Link className="form-control">fruit $5</Link>
                  <Link className="form-control">coffee $10</Link>
                  <Link className="form-control">ice cream $15</Link>
            </form>
            
        );
    }
}