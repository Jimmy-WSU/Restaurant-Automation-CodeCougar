import React, { Component } from "react";
import axios from "axios"

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: 'Steven',
            password: '123456',
            role: 'Chef'
         };
        this.changeValues = this.changeValues.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    changeValues(e) {
        switch(e.target.name) {
            case 'username':
                this.setState({username: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            case 'role':
                this.setState({role: e.target.value});
                break;
            default:
                console.log('Something is really wrong, commander');
        }
    }
    submitForm (e) {
        e.preventDefault()
        console.log(this.state);
        // this.props.history.push('/homepage'); // <--- The page you want to redirect your user to.
        axios.post('http://localhost:3001/register',{
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        }, { headers: { "Content-type": "application/json" }}).then((res)=>{
            // this.setState({list : [...res.data]})
            console.log(res.data.status)
            if (res.data.status == 'Successful') {
                this.props.history.push('/homepage');
            }
            if (res.data.status == 'Incorrect password') {
                alert('Incorrect password');
            }
            if (res.data.status == 'Incorrect username') {
                alert('Incorrect username');
            }
        })
            .catch(()=>{alert('error')})
            console.log('componentDidMount')
    }
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Role</label>
                    <input type="text" className="form-control" placeholder="ex: manager" name="role" value={this.state.role} onChange={this.changeValues} />
                </div>

                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="UserName" name="username" value={this.state.username} onChange={this.changeValues} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.changeValues} />
                </div>
                <div>
                    <form onSubmit={this.submitForm.bind(this)}>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="http://localhost:3000/sign-in#">sign in?</a>
                </p>
                
            </form>
        );
    }
}