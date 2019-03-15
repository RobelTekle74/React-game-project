import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Register from "./Register"

import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Provider from "react"


class Login extends Component {
 constructor(props) {
   super(props);

   this.state = {
     username: "",
     password: "",
     redirect: false

   };
 }

 validateForm() {
   return this.state.username.length > 0 && this.state.password.length > 0;
 }

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }

 handleSubmit = event => {
   event.preventDefault();

   // do axios.post - if successful route to game and dispatch action saving user name to store (reducer.js)

   axios.post('/users/login', {
       username: this.state.username,
       password: this.state.password
     })
     .then( (response) => {
       console.log(response)
       this.setState({...this.state, redirect: true});
       this.props.login(this.state.username);
     })
     .catch(function (error) {
       console.log(error);
     });
 }

 render() {
   return (
        <div className="Login">
            <p style={{marginTop: 0}}>Log in and let's start playing!</p><br />
            <form onSubmit={this.handleSubmit}>

                <FormGroup controlId="username" bssize="large">
                <FormLabel>Username:</FormLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup controlId="password" bssize="large">
                <FormLabel>Password:</FormLabel>
                <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                />
                </FormGroup>
                <Button
                block
                bssize="large"
                type="submit">
                    Login
                </Button>
                    
                <Link to='./register'><button>Are you new here?</button></Link>
            </form>

            <Route path='/register' Component = {Register}/>
        </div>
   );
 }
}

// //state
// const mapStateToProps = (state) => {
//  return {
//    username: state.username,
//  }
// }

// //props
// const mapDispatchToProps = (dispatch) => {
//  return {
//      login: (username) => dispatch({type: "LOG_IN", player: username}),
//  }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login;