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
    
    this.getEmpoyees = this.getEmpoyees.bind(this);
    
    this.backToLastPage = this.backToLastPage.bind(this);
  }
    getEmpoyees (e) {
      e.preventDefault()
      axios.post('http://localhost:3001/employees').then((res)=>{
        // this.state.employees = res.data.employees;
        this.setState({
          employees: res.data.employees
        });
        // console.log(this.state.menu)
      })
          .catch(()=>{message.error('Internet error');})
    }
    backToLastPage = () => {
      this.props.history.push({
        pathname:'/homepagemanager',
      })
  };
render(){
  return (
      <form>
          <Button type="primary"  justify="center" onClick={this.backToLastPage }>Back</Button>

          <h3>Employee Information</h3>
          <Button onClick={this.getEmpoyees}>Get Employee Information</Button>
      <Table 
        columns={this.state.columns}
        dataSource={this.state.employees}>
      
      </Table>
    </form>
  );
}
}