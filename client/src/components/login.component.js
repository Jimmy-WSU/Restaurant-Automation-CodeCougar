import React, { Component } from "react";
import axios from "axios"

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            username: 'James',
            password: '123456'
         };
        this.changeValues = this.changeValues.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    // callAPI() {
    //     fetch("http://localhost:3001/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }));
    // }
    
    // componentWillMount() {
    //     this.callAPI();
    // }
    changeValues(e) {
        switch(e.target.name) {
            case 'username':
                this.setState({username: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            default:
                console.log('Something is really wrong, commander');
        }
    }
    submitForm (e) {
        e.preventDefault()
        console.log(this.state);
        // this.props.history.push('/homepage'); // <--- The page you want to redirect your user to.
        axios.post('http://localhost:3001/login',{
            username: this.state.username,
            password: this.state.password
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
        // axios.get('http://localhost:3001/login').then((res)=>(
        //     // this.setState({list : [...res.data]})
        //     console.log(res)
        //     ))
        //     .catch(()=>{alert('error')})
        //     console.log('componentDidMount')
        // }
    render() {
        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="Enter name" name="username" value={this.state.username} onChange={this.changeValues} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.changeValues} />
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
