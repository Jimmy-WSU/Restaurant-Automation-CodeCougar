import React, { Component } from "react";
import { Input, message, Space, Form, Button  } from 'antd';
import axios from "axios";

export default class orderChefDetails extends Component {
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
        this.getFoodReady = this.getFoodReady.bind(this);
        this.backToLastPage = this.backToLastPage.bind(this);
      };

    getOrderDetails () {
        console.log(this.props.location.state);
        this.state.orderID = this.props.location.state.data.orderID;
        console.log(this.state.orderID);
        axios.post('http://localhost:3001/orderDetails',{
          orderID: this.state.orderID,
        }).then((res)=>{
            if (res.data.status === 'Successful') {
                message.success('Get order details successfully!');
                // console.log(res.data.orderDetails[0]);
                this.state.orderDetail = res.data.orderDetails[0];
                this.setState({
                    orderDetail: res.data.orderDetails
                })
                // console.log(this.state.orderDetail);    
            }
        })
            .catch(()=>{message.error('Internet error');})
    }
    getFoodReady () {
        if (this.state.orderDetail[0].orderStatus === 'Ready') {
            message.error('The order is ready!');   
        } 
        else if (this.state.orderDetail[0].orderStatus === 'Cooking') {
            axios.post('http://localhost:3001/getFoodReady',{
                orderID: this.state.orderID
            }).then((res)=>{
                console.log(res.data);  
                if (res.data.status === 'Successful') {
                    message.success('Get food ready successfully!');          
                    this.getOrderDetails();
                }
            })
                .catch(()=>{message.error('Internet error');})
        }
    }
    backToLastPage = () => {
        this.props.history.push({
          pathname:'/orderListChef',
          state:this.props.location.state.data.chefName
        })
    };

    componentWillMount(){
        this.getOrderDetails();
    }
    render() {
        return (
                
                <Form
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 10 }}
                    layout={'horizontal'}
                >
                    <Button type="primary"  justify="center" onClick={this.backToLastPage }>Back</Button>
                    <h3>Order Details</h3>
                    <Form.Item wrapperCol= {{ offset: 8 }}>
                        <Space size="middle">
                            <Button type="primary"  justify="center" onClick={this.getOrderDetails }>Get Order Details</Button>
                            <Button type="primary"  justify="center" onClick={this.getFoodReady }>Food is Ready</Button>
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