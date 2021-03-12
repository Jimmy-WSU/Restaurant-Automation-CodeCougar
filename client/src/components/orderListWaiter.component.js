import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input, message, Table, Tag, Space, Typography,Form, Button  } from 'antd';
import axios from "axios";
const { Column, ColumnGroup } = Table;


export default class orderListChef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetail: [{
                orderID: '',
                waiterName: '',
                chefName: '',
                totalPrice: '',
                tableID: '',
                foodList: '',
                orderStatus: ''
            }],
            columns:  [
                {
                    title: 'Order ID',
                    dataIndex: 'orderID'
                },
                {
                    title: 'Table ID',
                    dataIndex: 'tableID'
                },
                {
                    title: 'Waiter Name',
                    dataIndex: 'waiterName',
                },
                {
                    title: 'Chef Name',
                        dataIndex: 'chefName',
                },
                {
                    title: 'Food List',
                    dataIndex: 'foodList',
                },
                {
                    title: 'Total price',
                    dataIndex: 'totalPrice',
                },
                {
                    title: 'Order Status',
                    dataIndex: 'orderStatus',
                },
                {
                    title: 'Create Time',
                    dataIndex: 'createTime',
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <Space size="middle">
                        <Button onClick = {() => {this.takeOrder(record);}}>Serve</Button>
                        </Space>
                    ),
                },
            ]
          };
        this.getOrderList = this.getOrderList.bind(this);
        this.takeOrder = this.takeOrder.bind(this);
      };

    getOrderList (e) {
        e.preventDefault()
        axios.post('http://localhost:3001/getReadyOrderList',).then((res)=>{
            console.log(res.data);  
            this.setState({
                orderDetail: res.data.orderDetails
            })
        })
            .catch(()=>{message.error('Internet error');})
    }

    takeOrder (order) {
        // e.preventDefault()
        if (order.orderID) {
            axios.post('http://localhost:3001/serveTheFoods',{
                orderID: order.orderID,
                tableID: order.tableID
            }).then((res)=>{
                console.log(res.data);  
                if (res.data.status === 'Successful') {
                    message.success('Successful');          
                }
            })
                .catch(()=>{message.error('Internet error');})
        } else {
            message.error('Error');    
        }
        
    }
    backToLastPage = () => {
        this.props.history.push({
          pathname:'/homepagewaiter',
          state:{
              username: this.props.location.state}
        })
    };
    render() {
        return (
                
            <form>
                <h4>Welcome: {this.props.location.state}</h4>
                <Button type="primary"  justify="center" onClick={this.backToLastPage }>Back</Button>
                <h3>Order List</h3>
            
                <Button onClick={this.getOrderList}>Get Ready Order List</Button>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.orderDetail}
               />
        
          </form>

        );
    }
}