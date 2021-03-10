import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input, message, Table, Tag, Space, Typography   } from 'antd';
import axios from "axios";
const { Column, ColumnGroup } = Table;
const { Text } = Typography;
const columns = [
  {
    title: 'Food Name',
    dataIndex: 'foodname'
  },
  {
    title: 'Food Price',
    dataIndex: 'foodprice',
  },
  {
    title: 'Sales',
    dataIndex: 'sale',
  },
];

export default class foodmenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu: [],
          selectedRowKeys: [],
          selectedFood: [],
          totalPrice: 0,
          tableID: '1',
          username: ''
        };
        
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.getMenu = this.getMenu.bind(this);
        this.checkout = this.checkout.bind(this);
        this.changeValues = this.changeValues.bind(this);
      }
      onSelectedRowKeysChange (selectedRowKeys) {
        this.setState({ selectedRowKeys });
      };

      changeValues(e) {
        switch(e.target.name) {
            case 'tableID':
              this.setState({tableID: e.target.value});
            break;
            default:
                console.log('Something is really wrong, commander');
        }
    }
      onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }

      getMenu (e) {
        e.preventDefault()
        axios.post('http://localhost:3001/foodmenu').then((res)=>{
          // console.log(res.data.menu);
          this.state.menu = res.data.menu;
          // console.log(this.state.menu)
          this.setState({
            menu: res.data.menu
          });
        })
            .catch(()=>{message.error('Internet error');})
            console.log('componentDidMount')
      }
      checkout (e) {
        e.preventDefault()
        console.log(this.state.tableID);
        console.log(this.selectedFood);
        axios.post('http://localhost:3001/checkout',{
          tableID: this.state.tableID,
          waiterName: this.props.location.state,
          foodList: this.selectedFood,
          totalPrice: this.totalPrice
        }).then((res)=>{
          console.log(res);
          if (res) {
            this.props.history.push({
              pathname: '/order', 
              state: res.data.orderID
          });
          }
          // this.state.username = PubSub.subscribe('username');
          // console.log(this.state.username);
          
        })
            .catch(()=>{message.error('Internet error');})
      }
      
      render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          // onChange: this.onSelectChange,
          onChange: (selectedRowKeys, record) => {
            this.onSelectedRowKeysChange(selectedRowKeys)
            console.log(record)
            this.selectedFood = record
            console.log(this.selectedFood)
          },
        };
        return (
          <form>
            <h4>Foodmenu</h4>
            <h4>Welcome: {this.props.location.state}</h4>
            <button onClick={this.getMenu}>Get Food Menu</button>
            <Table
              columns={columns}
              dataSource={this.state.menu}
              rowSelection={rowSelection}
              summary={
                tableData => {
                  // console.log(this.selectedFood)
                  let totalPrice = 0;
                  if (this.selectedFood) {
                    this.selectedFood.forEach(({ foodprice }) => {
                      // console.log(foodprice)
                      totalPrice += foodprice;
                    });
                    totalPrice = totalPrice.toFixed(2);
                    this.totalPrice = totalPrice;
                  }
                  return (
                    <>
                      <Table.Summary.Row>
                        <Table.Summary.Cell>Total Price</Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Text>{totalPrice}</Text>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                    </>
              );}} />
            <h5>Table:
            <Input style={{ width: 110 }} placeholder="table number"  name="tableID" value={this.state.tableID} onChange={this.changeValues} /></h5>
            
            <br />
            <div>
              <button variant="outline-primary" onClick={this.checkout}>Submit</button>
              <button variant="outline-primary">Cancel</button>
            </div>
          </form>
        );
      }
  
    }
    
    