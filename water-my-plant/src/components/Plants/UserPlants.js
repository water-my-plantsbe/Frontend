import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

class UserPlants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plants: [],
        }
    }
    componentDidMount() {
        let id = localStorage.getItem(`id`)
        // const localurl = `http://localhost:5000/api/plants/${id}/plants`
        const url = `https://watermylovelyplants.herokuapp.com/api/plants/${id}/plants`
        try {
            axios
                .get(url , { headers: { Authorization: localStorage.getItem("token") } })
                .then(res => {this.setState({ plants: res.data })})
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <UserWrapper>
                <h1>My Plants</h1> 
              <PlantsWrapper>       
                <>
                   {this.state.plants.map(plants=>
                    <PlantBar key = {plants.id}> 
                            <h2 > {plants.name}        </h2> 
                            <h4 > {plants.description} </h4>  
                            <h4 > {plants.last_water}  </h4>   
                    </PlantBar >
                   )}
                </>
               </PlantsWrapper>
            </UserWrapper>
        );
    }
}      
export default withRouter(UserPlants);

const UserWrapper = styled.div`
      width: 100%;
      height: 100%;
      margin-top: 60px;      
      h1{ 
        Text-align: center;
        margin: auto;
        width: 30%;
        box-shadow: 0 2px  2px 2px grey;
        margin-bottom : 10px;
    }
`
const PlantsWrapper= styled.div`
     display: flex;
     flex-wrap: wrap;
     justify-content:center;
`
const PlantBar = styled.div`
    box-shadow: 0px 2px 2px purple;
    text-align : center;
    min-width: 200px;
    border-radius: 5px; 
    padding-bottom: 5px;
    margin: 0 auto;
`