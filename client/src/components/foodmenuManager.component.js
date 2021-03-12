import React, { Component } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { renderOption } from 'react-dom'
import { Input, message, Table, Tag, Space, Typography,Select,List,Button,Modal,Form   } from 'antd';
import axios from "axios";
const { Column, ColumnGroup } = Table;

const { Option } = Select;
const { Text } = Typography;
export default class foodmenu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          menu: [],
          table: [],
          selectedRowKeys: [],
          selectedFood: [],
          username: '',
          foodname: '123',
          foodprice: '123',
          columns: [
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
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                  <Space size="middle">
                  <Button  danger onClick = {() => {this.delete(record);}}>Delete</Button>
                  </Space>
              ),
          },
          ],
          visible: false
        };
        
        this.getMenu = this.getMenu.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.changeValues = this.changeValues.bind(this);
        this.backToLastPage = this.backToLastPage.bind(this);
        
      }
      // onSelectedRowKeysChange (selectedRowKeys) {
      //   this.setState({ selectedRowKeys });
      // };

      getMenu (e) {
        e.preventDefault()
        axios.post('http://localhost:3001/foodmenu').then((res)=>{
          this.state.menu = res.data.menu;
          this.setState({
            menu: res.data.menu
          });
          // console.log(this.state.menu)
        })
            .catch(()=>{message.error('Internet error');})
      }
      
      delete (food) {
          // e.preventDefault()
          if (food.key) {
            axios.post('http://localhost:3001/foodDelete',{
            key: food.key
            }).then((res)=>{
                console.log(res.data);  
                if (res.data.status === 'Successful') {
                    message.success('Successful');           
                    axios.post('http://localhost:3001/foodmenu').then((res)=>{
                      this.state.menu = res.data.menu;
                      this.setState({
                        menu: res.data.menu
                      });
                    })
                    .catch(()=>{message.error('Internet error');})
                } 
            })
                .catch(()=>{message.error('Internet error');})
        } else {
            message.error('Error');    
        } 
      }
      addFood (e) {
        // e.preventDefault()

      }
      
      showModal = () => {
          this.setState({
              visible: true,
          });
      };
        
      handleOk = () => {
          this.setState({
            visible: false,
        });
        axios.post('http://localhost:3001/foodAdd',{
            foodname: this.state.foodname,
            foodprice: this.state.foodprice
        }, { headers: { "Content-type": "application/json" }}).then((res)=>{
            // this.setState({list : [...res.data]})
            console.log(res.data)
            if (res.data.status === 'Successful') {
                message.success('Successful');
            }
        })
            .catch(()=>{message.error('Internet error');})
            console.log('componentDidMount')
      };
      handleCancel = () => {
          this.setState({
            visible: false,
        });
      };
      changeValues(e) {
        switch(e.target.name) {
            case 'foodname':
                this.setState({foodname: e.target.value});
                break;
            case 'foodprice':
                this.setState({foodprice: e.target.value});
                break;
            default:
                console.log('Something is really wrong, commander');
        }
    }
    backToLastPage = () => {
      this.props.history.push({
        pathname:'/homepagemanager',
      })
  };
      render() {
        const layout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 16 },
        };
        return (
          <form>
            <Button type="primary"  justify="center" onClick={this.backToLastPage }>Back</Button>
            <h3>Foodmenu</h3>
            <Space size="large">
              <Button onClick={this.getMenu}>Get Food Menu</Button>
              <Button type="button" onClick={this.showModal}>Add New Food</Button> 
            </Space>
            
            <Modal title="Add New Food" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <Form
              {...layout}
              name="basic"
            >
              <div className="form-group">
                    <label>Food Name</label>
                    <input type="text" className="form-control" name="foodname" value={this.state.foodname} onChange={this.changeValues} />
                </div>

                <div className="form-group">
                    <label>Food Price</label>
                    <input type="txt" className="form-control" name="foodprice" value={this.state.foodprice} onChange={this.changeValues} />
                </div>
            </Form>
            </Modal>
            <Table
              columns={this.state.columns}
              dataSource={this.state.menu}
               />
          </form>
        );
      }
  
    }
    
    