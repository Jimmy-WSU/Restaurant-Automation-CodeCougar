import React, { Component, icons } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {  Rate,   } from 'antd'





export default class salesanalysis extends Component {
  render(){
    return(
    <>
      <h4>Salesanalysis</h4>
      noodles:
      <Rate defaultValue={5} character={({ index }) => index + 1} />
      <br />
      coffee:
      <Rate defaultValue={2} character={({ index }) => index + 1} />
      <br />
      steak:
      <Rate defaultValue={1} character={({ index }) => index + 1} />
    </>
    
    );
  }
}
