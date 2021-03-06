import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>UserID</label>
                    <input type="text" className="form-control" placeholder="UserID" />
                </div>

                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="UserName" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="http://localhost:3000/sign-in#">sign in?</a>
       
                </p>
            </form>
        );
    }
}