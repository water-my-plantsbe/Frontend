import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            id: '',
            phone:'',
            password:''
        }
    }
    componentDidMount() {
        let id = localStorage.getItem(`id`)
        const url = `https://watermylovelyplants.herokuapp.com/api/users/${id}`
        // const localurl = `http://localhost:5000/api/users/${id}`
        this.setState({ id: id });
        try {
            axios
                .get(url, { headers: { Authorization: localStorage.getItem("token") } })
                .then(res => {
                    this.setState({ username: res.data.username, email: res.data.email, phone: res.data.phone})
                })
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <UserWrapper>
            <UserBar>
                 <h3>Name : {this.state.username}</h3>
                 <h3>Email : {this.state.email}</h3>
                 <h3>Phone : {this.state.phone}</h3>
            </UserBar>
            </UserWrapper>
        );
    }
}
        
export default withRouter(UserProfile);

const UserWrapper = styled.div`
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
`