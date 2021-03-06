import React, { Component } from "react";

export default class Login extends Component {
    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/homepage'); // <--- The page you want to redirect your user to.
      }
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>UserID</label>
                    <input type="text" className="form-control" placeholder="Enter ID" />
                </div>

                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div>
                <form onSubmit={this.submitForm.bind(this)}>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
                </div>
                <p className="forgot-password text-right">
                     <a href="#">Forgot password?</a>
                </p>
            </form>
        );
    }
}
