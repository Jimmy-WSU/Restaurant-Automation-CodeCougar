import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class homepagemanager extends Component {
    render() {
        return (
            <form>
                <h3>homepage manager</h3>
                <Link className="form-control" to="/foodmenu">Foodmenu</Link>
                <Link className="form-control" to="/order">Order</Link>
                <Link className="form-control" to="/table">Table</Link>
            </form>
        );
    }
}