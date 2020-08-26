import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import StudentDataService from '../service/StudentDataService';

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            message: null,
        }
    }

    componentDidMount(){
        this.refreshStudentList();
    }

    refreshStudentList(){
        StudentDataService.retrieveAllStudents().then(response => {this.setState({students: response.data})})
    }

    render() {
        return(
            <div className="container">
             <h1>STUDENT CATALOG</h1>
             <br/><br/>
            </div>
        )

    }
}


export default withRouter(MainPage);