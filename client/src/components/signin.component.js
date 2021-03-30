import React, { Component } from "react";
import axios from "axios";
import { message } from 'antd';

export default class Signin extends Component {
    // static PropTypes={
    //     value:PropTypes.string.isRequired,
    //     onChange:PropTypes.func.isRequired
    // }
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
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
            default:
                console.log('Something is really wrong, commander');
        }
    }
    submitForm (e) {
        e.preventDefault()
        // console.log(this.state);
        // this.props.history.push('/homepage'); // <--- The page you want to redirect your user to.
        axios.post('http://localhost:3001/signin',{
            username: this.state.username,
            password: this.state.password
        }, { headers: { "Content-type": "application/json" }}).then((res)=>{
            // this.setState({list : [...res.data]})
            console.log(res.data)
            if (res.data.status === 'Successful') {
                message.success('Sign in Successfully!');
                if(res.data.role === 'Chef') {
                    this.props.history.push({
                        pathname: '/homepagechef', 
                        state: this.state
                    });
                } 
                else if (res.data.role === 'Waiter') {
                    this.props.history.push({
                        pathname: '/homepagewaiter', 
                        state: this.state
                    });
                } 
                else if (res.data.role === 'Busboy') {
                    this.props.history.push({
                        pathname: '/homepagebusboy', 
                        state: this.state
                    });
                } 
                else if (res.data.role === 'Manager') {
                    // this.props.history.push('/homepagemanager');
                    this.props.history.push({
                        pathname: '/homepagemanager', 
                        state: this.state
                    });
                }
            }
            if (res.data.status === 'Incorrect password') {
                // alert('Incorrect password');
                message.error('Incorrect password');
            }
            if (res.data.status === 'Incorrect username') {
                message.error('Incorrect username');
            }
        })
            .catch(()=>{message.error('Internet error');})
            console.log('componentDidMount')
    }
    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="Enter username" name="username" value={this.state.username} onChange={this.changeValues} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.changeValues} />
                </div>
                <div>
                    {/* <form onSubmit={this.submitForm.bind(this)}> */}
                       <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    {/* </form> */}
                </div>
            </form>
        );
    }
}
