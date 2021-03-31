import React, { Component } from "react";
import { message, Table, Space, Button  } from 'antd';
import axios from "axios";


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
                        <Button onClick = {() => {this.takeOrder(record);}}>Take</Button>
                        </Space>
                    ),
                },
            ]
          };
        this.getOrderList = this.getOrderList.bind(this);
        this.takeOrder = this.takeOrder.bind(this);
        this.backToLastPage = this.backToLastPage.bind(this);
      };

    getOrderList () {
        axios.post('http://localhost:3001/getUnassignedOrderList',).then((res)=>{
            if (res.data.status === 'Successful') {
                message.success('Get order list successfully!');
                console.log(res.data);  
                this.setState({
                    orderDetail: res.data.orderDetails
                })
            }

        })
            .catch(()=>{message.error('Internet error');})
    }

    takeOrder (order) {
        // e.preventDefault()
        console.log(1);
        console.log(this.props.location.state); 
        if (order.orderID) {
            axios.post('http://localhost:3001/updateChefOrder',{
            orderID: order.orderID,
            chefName: this.props.location.state
            }).then((res)=>{
                console.log(res.data);  
                if (res.data.status === 'Successful') {
                    message.success('Take order successfully!');              
                    this.props.history.push({
                        pathname: '/orderChefDetails', 
                        state: {
                            data: {
                                orderID: order.orderID,
                                chefName: this.props.location.state
                            }
                        }
                    });  
                }   
            })
                .catch(()=>{message.error('Internet error');})
        } else {
            message.error('Error');    
        }
        
    }
    backToLastPage = () => {
        this.props.history.push({
          pathname:'/homepagechef',
          state:{
            username: this.props.location.state}
        })
    };
    componentWillMount(){
        this.getOrderList();
    }
    render() {
        return (
                
            <form>
                <h4>Welcome: {this.props.location.state}</h4>
                <h3>Order List</h3>
                <Button type="primary"  justify="center" onClick={this.backToLastPage }>Back</Button>
                <Button onClick={this.getOrderList}>Get Unassigned Order List</Button>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.orderDetail}
               />
        
          </form>

        );
    }
}