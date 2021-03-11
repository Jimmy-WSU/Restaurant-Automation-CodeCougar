import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input, message, Table, Tag, Space, Typography,Form, Button  } from 'antd';
import axios from "axios";
const { Column, ColumnGroup } = Table;

export default class tableStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tableData: [{
            tableID: '',
            tableStatus: ''
        }],
        columns:  [
          {
            title: 'Table Number',
            dataIndex: 'tableID'
          },
          {
            title: 'Table Status',
            dataIndex: 'tableStatus',
          },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                    <Button onClick = {() => {this.clean(record);}}>Clean</Button>
                    </Space>
                ),
            },
        ]
      };
    this.getTableList = this.getTableList.bind(this);
  };
  getTableList (e) {
    e.preventDefault()
    axios.post('http://localhost:3001/tableAll',).then((res)=>{
        console.log(res.data);  
        this.setState({
          tableData: res.data.table
        })
    })
        .catch(()=>{message.error('Internet error');})
  }
  clean (table) {
    // e.preventDefault()
    if (table.tableID) {
        axios.post('http://localhost:3001/tableClean',{
        tableID: table.tableID
        }).then((res)=>{
            console.log(res.data);  
            if (res.data.status === 'Successful') {
                message.success('Successful');           
                axios.post('http://localhost:3001/tableAll',).then((res)=>{
                    console.log(res.data);  
                    this.setState({
                      tableData: res.data.table
                    })
                })
                    .catch(()=>{message.error('Internet error');})
            } 
        })
            .catch(()=>{message.error('Internet error');})
    } else {
        message.error('Error');    
    }
    
}
render(){
  return (
    <form>
        <h4>Table Status</h4>
        <button onClick={this.getTableList}>Get Table Status</button>
        <Table
          columns={this.state.columns}
          dataSource={this.state.tableData}
           />
        
        <br />
      </form>
  );
}
      }