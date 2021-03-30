import React, { Component } from 'react';
import { message, Table, Space,  Button  } from 'antd';
import axios from "axios";

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
  getTableList () {
    axios.post('http://localhost:3001/tableAll',).then((res)=>{
      if (res.data.status === 'Successful') {
        message.success('Get table list successfully!');    
        console.log(res.data);  
        this.setState({
          tableData: res.data.table
        })
      }

    })
        .catch(()=>{message.error('Internet error');})
  }
  clean (table) {
    if (table.tableID) {
      if (table.tableStatus === "Busy") {
        message.error('The table is busy!');    
      }
      else if (table.tableStatus === "Free") {
        message.error('The table is already clean!');    
      }
      else if (table.tableStatus === "Dirty") {
        axios.post('http://localhost:3001/tableClean',{
          tableID: table.tableID
          }).then((res)=>{
              console.log(res.data);  
              if (res.data.status === 'Successful') {
                  message.success('Clean table successfully!');           
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
      } 
    } else {
        message.error('Error');    
    }
}
componentWillMount(){
  this.getTableList();
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