import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class homepage extends Component {
    render() {
        return (
            <form>
                <h3>homepage</h3>
                <Link className="form-control" to="/homepagewaiter">waiter</Link>
                <Link className="form-control" to="/homepagechef">chef</Link>
                <Link className="form-control" to="/homepagemanager">manager</Link>
                <Link className="form-control" to="/homepagebusboy">busboy</Link>

            </form>
        );
    }
}