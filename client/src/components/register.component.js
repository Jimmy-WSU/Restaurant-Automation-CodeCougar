import React, { Component } from "react";
import axios from "axios";
import { Select,message } from 'antd';
const { Option } = Select;

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            role: '',
            firstname: '',
            lastname: '',
         };
        this.changeValues = this.changeValues.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    changeValues(e) {
        console.log(e.target.name);
        switch(e.target.name) {
            case 'username':
                this.setState({username: e.target.value});
            break;
            case 'password':
                this.setState({password: e.target.value});
            break;
            case 'firstname':
                this.setState({firstname: e.target.value});
            break;
            case 'lastname':
                this.setState({lastname: e.target.value});
            break;
            default:
                console.log('Something is really wrong, commander');
        }
    }
    handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({role: value});
    }
    submitForm (e) {
        e.preventDefault()
        console.log(this.state);
        // this.props.history.push('/homepage'); // <--- The page you want to redirect your user to.
        axios.post('http://localhost:3001/register',{
            username: this.state.username,
            password: this.state.password,
            role: this.state.role,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
        }, { headers: { "Content-type": "application/json" }}).then((res)=>{
            // this.setState({list : [...res.data]})
            console.log(res.data.status === 'Successful');
            console.log(res.data.status);
            if (res.data.status === 'Successful') {
                message.success('Successful');
                this.props.history.push('/sign-in');
            }
            if (res.data.status === 'Username already exists') {
                message.error('Username already exists');
            }
        })
            .catch(()=>{alert('error')})
    }
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Role</label>
                    <Select style={{ width: 340 }} name="role" value={this.state.role} onChange={this.handleChange}>
                        <Option value="Waiter">Waiter</Option>
                        <Option value="Busboy">Busboy</Option>
                        <Option value="Chef">Chef</Option>
                        <Option value="Manager">Manager</Option>
                    </Select>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="UserName" name="username" value={this.state.username} onChange={this.changeValues} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.changeValues} />
                </div>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.changeValues} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.changeValues} />
                </div>
                
                <div>
                    <form onSubmit={this.submitForm.bind(this)}>
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </form>
                </div>
                <p className="forgot-password text-right">
                    Already registered? <a href="http://localhost:3000/sign-in#">Sign in</a>
                </p>
                
            </form>
        );
    }
}