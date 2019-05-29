import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'reactstrap';
import { withRouter, BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
      };
  }
  componentDidMount() {
    if(localStorage.getItem("token")){
      alert("You are Already Logged In")
      this.props.history.push('/plantsbook')
    }
  }
  
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handlePassword = e => {
     e.preventDefault();
     try{
      //  const localurl = `http://localhost:5000/api/login`
       const url = 'https://watermylovelyplants.herokuapp.com/api/login';
      axios
          .post(url, this.state)
          .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.id);
            this.props.history.push('/myplants');
         })
    } catch(err) {
      console.log({Error: err})
    }
  }

  render(){
    return(
      <Router>
        <FormWrapper>
          <UserBar>
            <Form  onSubmit={this.handlePassword} className ='loginform'>
              <input
                  className ='input'
                  type="text"
                  placeholder="username or email"
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

              <Button className= "input" onClick={this.handlePassword}>Log in</Button>
                  <p> Don't have an account ? </p>
                  {/* <Link to="/register ">  Register Here</Link>      */}
                <a href=" https://watermyplant.netlify.com/register">Register Here </a>
            </Form>  
          </UserBar>
       </FormWrapper>       
    </Router>
    );
  }
}

export default withRouter(Login);

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
    a{
      text-decoration: none;
    }
    a:hover{
      color: pink;
    }
    .input{
          margin: 5px;
          height: 25px;
          width : 300px;
          border-radius: 5px;
          border: none;
          box-shadow: 0 2px 4px #272727;
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