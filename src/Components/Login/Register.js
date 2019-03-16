import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';


class Register extends Component {
 constructor(props) {
   super(props);
   this.state = {
     username: "",
     password: "",
     redirect: "false",
     player: ""
   };
 }
 
 validateForm() {
   return this.state.username.length > 0 && this.state.password.length > 0;
 }

 //updates the state with the input text as it changes

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }

 //sends username and password to database

    handleSubmit = event => {
            console.log('running')
        event.preventDefault();
        axios.post('/users/register', {
            username: this.state.username,
            password: this.state.password
        })
        .then( (response) => {
            console.log(response)
            this.setState({...this.state,redirect: true});
            // this.props.login(this.state.username);
        })
        .catch(function (error) {
            console.log(error);
            });
    }

 render() {

   if (this.state.redirect === true) {
        return <Redirect to='/Login'/>
    }

   return (
      <div className="Register">
        <p style={{marginTop: 0}}>Create an account!</p><br />
        <form onSubmit={(event) => this.handleSubmit(event)}>

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
              type="submit"
              >
              Register
          </Button>

        </form>
      </div>
   );
 }
}

//state
const mapStateToProps = (state) => {
 return {
   users: state.users.username,
 }
}

//props
const mapDispatchToProps = (dispatch) => {
 return {
     register: (username) => dispatch({type: "REGISTER", username: username}),
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

// export default Register;