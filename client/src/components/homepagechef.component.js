import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class homepagechef extends Component {
    render() {
        return (
            <form>
                <h3>homepage chef</h3>
                <Link className="form-control" to="/order">Order</Link>
            </form>
        );
    }
}