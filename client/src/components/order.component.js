import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input, message, Table, Tag, Space, Typography,Form   } from 'antd';
import axios from "axios";
const { Column, ColumnGroup } = Table;

const columns = [
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
  ];
export default class order extends Component {
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
            }]
          };
        this.getOrderDetails = this.getOrderDetails.bind(this);
      };

    getOrderDetails (e) {
        e.preventDefault()
        console.log(this.props.location.state);
        this.state.orderID = this.props.location.state;
        console.log(this.state.orderID);
        axios.post('http://localhost:3001/orderDetails',{
          orderID: this.state.orderID,
        }).then((res)=>{
          console.log(res.data.orderDetails[0]);
        //   console.log(this.state.orderDetail);
            // console.log(this.stat.orderDetail);
            this.state.orderDetail = res.data.orderDetails[0];
            this.setState({
                orderDetail: res.data.orderDetails
            })
            // this.state.orderDetail = res.data.orderDetails[0];
            console.log(this.state.orderDetail);
        //   }          
        })
            .catch(()=>{message.error('Internet error');})
    }

    render() {
        return (
            <form>
                <h3>order</h3>
                <button onClick={this.getOrderDetails}>Get Order Details</button><br />
                <div className="form-group">
                    <label>Order ID</label>
                    <input type="text" className="form-control" value={this.state.orderDetail[0].orderID} disabled/>
                </div>
                <div className="form-group">
                    <label>Table ID</label>
                    <input type="text" className="form-control" value={this.state.orderDetail[0].tableID} disabled/>
                </div>
                <div className="form-group">
                    <label>Waiter Name</label>
                    <input type="text" className="form-control" value={this.state.orderDetail[0].waiterName} disabled/>
                </div>
                <div className="form-group">
                    <label>Chef Name</label>
                    <input type="text" className="form-control" value={this.state.orderDetail[0].chefName} disabled/>
                </div>
                <div className="form-group">
                    <label>Food List</label>
                    <input type="text" className="form-control" value={this.state.orderDetail[0].foodList} disabled/>
                </div>
                <div className="form-group">
                    <label>Total price</label>
                    <input type="text" className="form-control" value={this.state.orderDetail[0].totalPrice} disabled/>
                </div>
                <div className="form-group">
                    <label>Order Status</label>
                    <input type="text" className="form-control" value={this.state.orderDetail[0].orderStatus} disabled/>
                </div>
                <div className="form-group">
                    <label>Create Times</label>
                    <input type="text" className="form-control" value={this.state.orderDetail[0].createTime} disabled/>
                </div>

            </form>
        );
    }
}