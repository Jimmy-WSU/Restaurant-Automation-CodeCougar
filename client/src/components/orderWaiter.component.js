import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input, message, Table, Tag, Space, Typography,Form, Button  } from 'antd';
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
export default class orderWaiter extends Component {
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
        this.serveTheFoods = this.serveTheFoods.bind(this);
        this.backToLastPage = this.backToLastPage.bind(this);
      };

    getOrderDetails (e) {
        e.preventDefault()
        console.log(this.props.location.state);
        this.state.orderID = this.props.location.state.data.orderID;
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
    serveTheFoods (e) {
        e.preventDefault()
        this.state.orderID = this.props.location.state.data.orderID;
        if (this.state.orderDetail[0].orderStatus === 'Started') {
            message.error('The order is waiting for cooks to choose!');   
        } 
        else if (this.state.orderDetail[0].orderStatus === 'Cooking') {
            message.error('The order is cooking!');   
        } 
        else if (this.state.orderDetail[0].orderStatus === 'Finished') {
            message.error('The order is finished!');   
        } 
        else if (this.state.orderDetail[0].orderStatus === 'Ready') {
            axios.post('http://localhost:3001/serveTheFoods',{
                orderID: this.state.orderID
            }).then((res)=>{
                console.log(res.data);  
                if (res.data.status === 'Successful') {
                    message.success('Successful');          
                    this.getOrderDetails(e);
                }
            })
                .catch(()=>{message.error('Internet error');})
        }
    }
    backToLastPage = () => {
        this.props.history.push({
          pathname:'/foodmenu',
          state:this.props.location.state.data.waiterName
        })
    };
    render() {
        return (
                
                <Form
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 10 }}
                    layout={'horizontal'}
                >
                    <h3>Order Details</h3>
                    <Button type="primary"  justify="center" onClick={this.backToLastPage }>Back</Button>
                    <Form.Item wrapperCol= {{ offset: 8 }}>
                        <Space size="middle">
                            <Button type="primary"  justify="center" onClick={this.getOrderDetails }>Get Order Details</Button>
                            <Button type="primary"  justify="center" onClick={this.serveTheFoods }>Serve The Foods</Button>
                        </Space>
                    </Form.Item>
                    
                    <Form.Item label="Order ID:">
                        <Input value={this.state.orderDetail[0].orderID}  bordered={false}/>
                    </Form.Item>
                    <Form.Item label="Table ID:">
                        <Input value={this.state.orderDetail[0].tableID}  bordered={false}/>
                    </Form.Item>
                    <Form.Item label="Waiter Name:">
                        <Input value={this.state.orderDetail[0].waiterName}  bordered={false}/>
                    </Form.Item>
                    <Form.Item label="Chef Name:">
                        <Input value={this.state.orderDetail[0].chefName}  bordered={false}/>
                    </Form.Item>
                    <Form.Item label="Food List:">
                        <Input value={this.state.orderDetail[0].foodList}  bordered={false}/>
                    </Form.Item>
                    <Form.Item label="Total Price:">
                        <Input value={this.state.orderDetail[0].totalPrice}  bordered={false}/>
                    </Form.Item>
                    <Form.Item label="Order Status:">
                        <Input value={this.state.orderDetail[0].orderStatus}  bordered={false}/>
                    </Form.Item>
                    <Form.Item label="Create Time:">
                        <Input value={this.state.orderDetail[0].createTime}  bordered={false}/>
                    </Form.Item>
                </Form>

        );
    }
}