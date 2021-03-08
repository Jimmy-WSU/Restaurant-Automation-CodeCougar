import React, { Component } from 'react';
import {  Table, Tag, Space  } from 'antd'


const { Column } = Table;

const data = [
  {
    key: '1',
    tablenumber: 1,
    tags: ['Unclean'],
  },
  {
    key: '2',
    tablenumber: 2,
    tags: ['Unclean'],
  },
  {
    key: '3',
    tablenumber: 3,
    tags: ['Unclean'],
  },
];
export default class table extends Component {
render(){
  return (
  <Table dataSource={data}>
    
      <Column title="Table number" dataIndex="tablenumber" key="tablenumber" />
    
    
    <Column
      title="Status"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="red" key={tag}>
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
          <a>Edit {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
  );
}
      }