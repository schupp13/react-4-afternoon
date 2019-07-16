import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class ClassList extends Component {
  constructor() {
    super()
    this.state={
      students: []
    }
    
  }

  componentDidMount(){
    axios
    .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(response=>{
      console.log(response);
      this.setState({students: response.data});
    });
  }

  render() {
   let theseStudents=  this.state.students.map((student, i )=>{
      return  <Link to={`/student/${student.id}`}> <h3 key={i}>{student.first_name} {student.last_name}</h3> </Link>
    });
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {theseStudents}
      </div>
    )
  }
}