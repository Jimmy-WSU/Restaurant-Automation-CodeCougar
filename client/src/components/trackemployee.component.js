import React, { Component } from "react";
import { message, Table, Button   } from 'antd';
import axios from "axios";

export default class table extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      employees: [],
      columns: [
        {
          title: 'First Name',
          dataIndex: 'firstname'
        },
        {
          title: 'Last Name',
          dataIndex: 'lastname',
        },
        {
          title: 'Role',
          dataIndex: 'role',
        },
      ],
    };
    
    this.getEmployees = this.getEmployees.bind(this);
    
    this.backToLastPage = this.backToLastPage.bind(this);
  }
    getEmployees () {
      axios.post('http://localhost:3001/employees').then((res)=>{
        if (res.data.status === 'Successful') {
          message.success('Get employee information successfully!');  
          this.setState({
            employees: res.data.employees
          });
        }
        // this.state.employees = res.data.employees;

        // console.log(this.state.menu)
      })
          .catch(()=>{message.error('Internet error');})
    }
    backToLastPage = () => {
      this.props.history.push({
        pathname:'/homepagemanager',
      })
  };
  componentWillMount(){
    this.getEmployees();
  }
render(){
  return (
      <form>
          <Button type="primary"  justify="center" onClick={this.backToLastPage }>Back</Button>

          <h3>Employee Information</h3>
          <Button onClick={this.getEmployees}>Refresh</Button>
      <Table 
        columns={this.state.columns}
        dataSource={this.state.employees}>
      
      </Table>
    </form>
  );
}
}