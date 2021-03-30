import React, { Component } from 'react';
import {  Table, Tag, Space  } from 'antd'


const { Column } = Table;

const data = [
  {
    key: '1',
    tablenumber: 1,
    tags: ['clean', 'available'],
  },
  {
    key: '2',
    tablenumber: 2,
    tags: ['clean', 'available'],
  },
  {
    key: '3',
    tablenumber: 3,
    tags: ['clean', 'available'],
  },
];
export default class table extends Component {
render(){
  return (
    <form>
      <h4>Table</h4>
  <Table dataSource={data}>
    
      <Column title="Table number" dataIndex="tablenumber" key="tablenumber" />
    
    
    <Column
      title="Status"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          {/* <a>Edit {record.lastName}</a>
          <a>Delete</a> */}
        </Space>
      )}
    />
  </Table>
  </form>
  );
}
      }

    
