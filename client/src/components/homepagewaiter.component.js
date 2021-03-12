import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class homepagewaiter extends Component {
    render() {
        var path = {
            pathname:'/foodmenu',
            state: this.props.location.state.username,
        }
        var path2 = {
            pathname:'/orderListWaiter',
            state: this.props.location.state.username,
        }
        return (
            <form>
                <h3>homepage waiter</h3>
                <h3>Welcome: {this.props.location.state.username}</h3>
                <Link className="form-control" to={path}>Foodmenu</Link>
                <Link className="form-control" to={path2}>OrderList</Link>
            </form>
        );
    }
}