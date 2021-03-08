import React, { Component } from "react";
import {  Table, Tag, Space  } from 'antd'


const { Column } = Table;

const data = [
  {
    key: '1',
    employee: 1,
    tags: ['In', 'Off'],
  },
  {
    key: '2',
    employee: 2,
    tags: ['In', 'Off'],
  },
  {
    key: '3',
    employee: 3,
    tags: ['In', 'Off'],
  },
];
export default class table extends Component {
render(){
  return (
      <form>
          <h4>Trackemployee</h4>
      
    <Table dataSource={data}>
    <Column title="employee" dataIndex="employee" key="employee" />
    <Column
      title="Status"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => {
          let color = tag.length < 3 ? 'geekblue' : 'blue';
          if (tag === 'Off') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
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
    </form>
  );
}
}