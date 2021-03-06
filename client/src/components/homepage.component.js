import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class homepage extends Component {
    render() {
        return (
            <form>
                <h3>homepage</h3>
                <Link className="form-control" to="/foodmenu">Food menu</Link>
                <Link className="form-control" to="/order">Order</Link>



                
            </form>
        );
    }
}