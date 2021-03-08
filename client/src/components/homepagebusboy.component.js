import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class homepagebusboy extends Component {
    render() {
        return (
            <form>
                <h3>homepage busboy</h3>
                <Link className="form-control" to="/tablestatus">tablestatus</Link>
            </form>
        );
    }
}