import React, { Component } from "react";
import { message, Table,  Typography,Select, Button   } from 'antd';
import axios from "axios";

const { Option } = Select;
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
          table: [],
          selectedRowKeys: [],
          selectedFood: [],
          totalPrice: 0,
          tableID: '',
          username: ''
        };
        
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.getMenu = this.getMenu.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.changeValues = this.changeValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
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

      getMenu () {
        // e.preventDefault()
        axios.post('http://localhost:3001/foodmenu').then((res)=>{
          if (res.data.status === 'Successful') {
            message.success('Get food menu successfully!');       
            this.setState({
              menu: res.data.menu
            });
          }
        })
            .catch(()=>{message.error('Internet error');})
        axios.post('http://localhost:3001/table').then((res)=>{
          this.setState({
            table: res.data.table
          });
          console.log(this.state.table)
        })
            .catch(()=>{message.error('Internet error');})
            console.log(this.state.table)
      }
      createOrder (e) {
        e.preventDefault()
        console.log(this.state.tableID);
        console.log(this.selectedFood);
        if (this.selectedFood) {
          if (this.state.tableID) {
            axios.post('http://localhost:3001/createOrder',{
              tableID: this.state.tableID,
              waiterName: this.props.location.state,
              foodList: this.selectedFood,
              totalPrice: this.totalPrice
            }).then((res)=>{
              console.log(res);
              if (res) {
                this.props.history.push({
                  pathname: '/orderWaiter', 
                  state: {data: {
                    waiterName: this.props.location.state,
                    orderID: res.data.orderID
                  }}
              });
              }
            })
                .catch(()=>{message.error('Internet error');})
          }
          else {
            message.error('Please select the table!');
          }
        } else {
          message.error('Please select the food!');
        }
        
      }
      handleChange(value) {
        console.log(`selected ${value}`);
        // this.state.tableID = value;
        this.setState({tableID: value});
      }
      backToLastPage = () => {
        this.props.history.push({
          pathname:'/homepagewaiter',
          state:{
            username: this.props.location.state
          }
        })
      }
      componentWillMount(){
        this.getMenu();
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
        const options = this.state.table.map(d => <Option key={d.tableID}>{d.tableID}</Option>);

        return (
          <form>
            <h3>Foodmenu</h3>
            <Button type="primary"  justify="center" onClick={this.backToLastPage }>Back</Button>
            <h4>Welcome: {this.props.location.state}</h4>
            <Button onClick={this.getMenu}>Get Food Menu</Button>
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
            <h5>Free Table Number:    <Select style={{ width: 120 }} onChange={this.handleChange}>
              {options}
            </Select>
            {/* <Input style={{ width: 110 }} placeholder="table number"  name="tableID" value={this.state.tableID} onChange={this.changeValues} /> */}
            </h5>
            
            <br />
            <div>
              <button variant="outline-primary" onClick={this.createOrder}>Submit</button>
              <button variant="outline-primary">Cancel</button>
            </div>
          </form>
        );
      }
  
    }
    
    