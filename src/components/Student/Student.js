import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor() {
    super()
    this.state ={
      studentInfo: {}
    };

  }

  componentDidMount(){
    return axios
    .get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(response =>{
        console.log(response);
      this.setState({
        studentInfo: response.data
      });
    })
    
  }

  render() {
   let  {first_name, last_name, grade, email} = this.state.studentInfo;
    return (
      <div className="box">
        <h1>Student:</h1>
        <h3>{first_name} {last_name}</h3>
        <h3>{grade}</h3>
        <h3>{email}</h3>
      </div>
    )
  }
}