import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import StudentDataService from "../service/StudentDataService";
import { Card } from "react-bootstrap";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      message: null,
    };
  }

  componentDidMount() {
    this.refreshStudentList();
  }

  refreshStudentList() {
    StudentDataService.retrieveAllStudents().then((response) => {
      this.setState({ students: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <h1>STUDENT CATALOG</h1>
        <br />
        <br />

        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.students.map(student =>
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                    </tr>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(MainPage);
