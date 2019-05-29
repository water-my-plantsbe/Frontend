import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phone:'',
            password:''
        }
    }
    componentDidMount() {
        let id = localStorage.getItem(`id`)
        const url = `https://watermylovelyplants.herokuapp.com/api/users/${id}`
        const localurl = `http://localhost:5000/api/users/${id}`
        this.setState({ id: id });
        try {
            axios
                .get(localurl || url, { headers: { Authorization: localStorage.getItem("token") } })
                .then(res => {
                    this.setState({ username: res.data.username, email: res.data.email, phone: res.data.phone, password: res.data.password})
                })
        } catch (err) {
            console.log(err);
        }
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    };

    updateInfo = (data, id) => {
        data = { username: this.state.username, email: this.state.email, password: this.state.password, phone: this.state.phone  }
        id = localStorage.getItem(`id`)
        console.log(id)
        const url = `http://localhost:5000/api/users/${id}`|| `https://watermyplantsbe.herokuapp.com/api/users/${id}` 
        try {
            axios
                .put(url, data, { headers: { Authorization: localStorage.getItem("token") }})
                .then(res => {
                    console.log(res);
                    this.setState({ username: res.data.username, email: res.data.email, phone: res.data.phone, password: res.data.password })
                    alert("Your Update Submitted Successfully");
                    console.log(res.data.phone);
                    this.props.history.push('/myplants');
                })
        } catch (err) {
            console.log(err);
        }
    }
    deleteMyAccount = id => {
        id = localStorage.getItem(`id`)
        const url = `http://localhost:5000/api/users/${id}` || `https://watermyplantsbe.herokuapp.com/api/users/${id}` 
        prompt("Your Account Will be deleted permanantly, Press Y for confirm else cancel")
        if(prompt === "Y" || "y"){
            try {
                axios
                    .delete(url, { headers: { Authorization: localStorage.getItem("token")}})
                    .then(res => {
                    console.log(res);
                        localStorage.clear();
                        sessionStorage.clear();
                        alert("Your Account deleted Successfully")
                        this.props.history.push('/login');
                        window.location.reload(true);
                    })
            } catch (err) {
                console.log(err);
            }
        }
    }

    render() {
        return (
            <Wrapper>
                <UserBar>
                  <div className ='loginform'>
                    <form onSubmit= {this.updateInfo}>
                    <div className="border">
                        <p>Name : </p>
                        <input
                            className='input'
                            onChange={this.handleInput}
                            placeholder="name"
                            value={this.state.username}
                            name="username"
                        />
                    </div>
                    <div className="border">
                        <p>Password : </p>
                        <input
                            className='input'
                            type= 'password'
                            onChange={this.handleInput}
                            placeholder=" new password"
                            value={this.state.password}
                            name="password"
                        />
                    </div>
                    <div className="border">
                        <p>Email : </p>
                        <input
                            className='input'
                            onChange={this.handleInput}
                            placeholder="email"
                            value={this.state.email}
                            name="email"
                        />
                    </div>
                    <div className="border">
                    <p>Phone: </p>
                        <input
                            className='input'
                            onChange={this.handleInput}
                            placeholder="phone"
                            value={this.state.phone}
                            name="phone"
                        />
                    </div>
                    </form>

                    <div className="btn">
                        <button onClick={this.deleteMyAccount}> Delete My Account permanantly</button>
                        <button className="updateBtn" onClick={this.updateInfo}>Update</button>
                    </div>
                  
                    </div>
                </UserBar>
            </Wrapper>
        )
    }
}
export default withRouter(User);
const Wrapper =styled.div`
      width: 100%;
      height: 100%;
`
const UserBar = styled.div`
    position:fixed;
    display: flex;
    flex-wrap:wrap;
    box-shadow: 0px 2px 2px purple;
    text-align : center;
    width: 50%;
    border-radius: 5px;
    margin: 10% 25%;
    @media(max-width: 479px){
        width: 90%;
        margin: 10% 5%;
    }
    .loginform{
        width: 100%;
    }
    .border{
        display: flex;
        flex-wrap:wrap;
        min-width:50%;
    }
    p{
        width: 30%;
        margin-left: 5%;
        @media(max-width: 479px){
            width: 90%;
        }
    }
    .input{
          margin: auto;
          height: 25px;
          min-width : 50%;
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