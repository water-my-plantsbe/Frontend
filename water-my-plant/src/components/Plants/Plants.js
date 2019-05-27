import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'reactstrap';
import axios from 'axios';

class Plants extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          description: '',
          last_water: '',
          schedule: [],
      };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handlePlantForm = e => {
     e.preventDefault();
     const id = localStorage.getItem(`id`)
     try{
       const localurl = `http://localhost:5000/api/plants/${id}/plant`
      axios
          .post(localurl || `https://watermylovelyplants.herokuapp.com/api/plants/${id}/plant` , this.state, { headers: { Authorization: localStorage.getItem("token") }})
          .then(res => {
            this.props.history.push('/myplants');
         })
    } catch(err) {
      console.log({Error: err})
    }
  }
  render(){
    return(
        <FormWrapper>
          <UserBar>
            <Form  onSubmit={this.handlePlantForm} className ='loginform'>
              <input
                  className ='input'
                  type="text"
                  placeholder=" Name of the Plant"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'text'
                  placeholder= 'description'
                  name='description'
                  value={this.state.description}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'text'
                  placeholder= 'Last water'
                  name='last_water'
                  value={this.state.last_water}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'text'
                  placeholder= 'Schedule'
                  name='schedule'
                  value={this.state.schedule}
                  onChange={this.handleInput}
              />

              <Button className= "input" onClick={this.handlePlantForm}>Add to my Plant List</Button>
            </Form>
          </UserBar>
       </FormWrapper>

    );
  }
}

export default Plants;

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