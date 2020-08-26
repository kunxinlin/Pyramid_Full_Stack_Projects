import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import UserDataService from '../service/UserDataService'

class Login extends Component{
    constructor(){
        super()
        this.state={
            email: "",
            password: "",
            error: "",
            isValid: true,
            statusCheck:"status",
            passwordCheck: "password"
        }
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validateForm(){
        if(this.state.email.length === 0) this.setState({isValid: true});
        else if(this.state.password.length === 0) this.setState({isValid: true});
        else this.setState({isValid: false});
    }

    handleSubmit(event) {
        event.preventDefault()
        UserDataService.retrievePassword(this.state.email).then(
          response =>{this.setState({passwordCheck: response.data, statusCheck: response.status})},
          reason =>{this.setState({error:"The email and/or password you have entered is not correct, please try again."})}
        ).then(()=>
          {
            if(this.state.password !== this.state.passwordCheck) this.setState({error:"The email and/or password you have entered is not correct, please try again."})
            else{
                if(UserDataService.retrieveIsProfessor(this.state.email) === true)
                {
                    this.props.history.push("/professorpage/", {email: this.state.email});
                }
                else{
                    this.props.history.push("/mainpage/", {email: this.state.email});
                }

            }
          }
        );
    }
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        this.validateForm(); 
    }

    render() {
        return (
          <div>
            <div className="jumbotron" style={{backgroundColor: "gray"}}>
              <h3 style={{textAlign: "center"}}>Login</h3>
            </div>
            <div className="Login">
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <b className="error" style={{color: "red"}}>{this.state.error}</b>
                <Button block disabled={this.state.isValid} type="submit">
                  Login
                </Button>
                <Button block name="registration" onClick={() =>this.props.history.push("/register/")} >
                  Register
                </Button>
              </form>
            </div>
          </div>
        )
    }
}


export default withRouter(Login);