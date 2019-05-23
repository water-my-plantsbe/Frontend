import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'reactstrap';
import axios from 'axios';

class Register extends React.Component {
  constructor() {
      super();
      this.state = {
          username: '',
          password: '',
          email: '',
          phone: ''
      };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handlePassword = e => {
     e.preventDefault();
     try{
       const localurl = `http://localhost:5000/api/register`
      axios
          .post('https://watermylovelyplants.herokuapp.com/api/register' || localurl, this.state)
          .then(res => {
            console.log(res);
            console.log("You successfully Registered in");
            this.props.history.push('/login');
         })
        }catch(err){
          console.log(err)
        }
    }

  render(){
    return(
      <FormWrapper>
        <UserBar>
          <Form  onSubmit={this.handlePassword} className ='login-form'>
              <input
                  className ='input'
                  type="text"
                  placeholder="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'email'
                  placeholder= 'Email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'text'
                  placeholder= 'Phone'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.handleInput}
              />
              <Button className ='input' color = 'success' onClick={this.handlePassword}>Sign Up</Button>
          </Form>
        </UserBar>
      </FormWrapper>
    );
  }
}

export default Register;

const FormWrapper =styled.div`
      width: 100%;
      height: 100%;
`
const UserBar = styled.div`
    box-shadow: 0px 2px 2px purple;
    text-align : center;
    width: 400px;
    border-radius: 5px;
    padding-top: 60px;
    padding-bottom: 60px;
    margin: 50px auto;
    .input{
          margin: 5px;
          height: 25px;
          width : 300px;
          border-radius: 5px;
          border: none;
          box-shadow: 0 2px 4px purple;
          text-align:center;
          @media(max-width: 479px){
              width: 250px;
          }
    }
      button{
        background-color: #009FB7;
        border-radius: 5px;
        color : white;
        margin: 10px;
        height: 30px;
        border: none;       
      }
      button:hover{
          box-shadow: 0 2px 4px #272727;
          transform: scaleX(1.025) scaleY(1.025);
          cursor : pointer;
          transition: all 0.2s;
      }
      }
    }
  `