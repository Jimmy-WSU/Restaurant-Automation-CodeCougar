import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class homepagewaiter extends Component {
    render() {
        return (
            <form>
                <h3>homepage waiter</h3>
                <Link className="form-control" to="/foodmenu">Foodmenu</Link>
            </form>
        );
    }
}