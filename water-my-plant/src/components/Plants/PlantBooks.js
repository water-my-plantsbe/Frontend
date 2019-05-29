import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class PlantBook extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          plants: [],
      };
  }
  componentDidMount(e) {
     try{
      //  const localurl = `http://localhost:5000/api/plants`
      axios
          .get( `https://watermylovelyplants.herokuapp.com/api/plants` )
          .then(res => {
            this.setState({plants : res.data})
         })
    } catch(err) {
      console.log({Error: err})
    }
  }
  render(){
    return(
        <FormWrapper>
                                <h1> PLANTS BOOK</h1>
          <PlantsWrapper >     
                <>
                   {this.state.plants.map(plants=>      
                    <PlantBar key = {plants.id} > 
                            <li> {plants.plant_name} </li>  
                    </PlantBar >
                   )}
                </>
               </PlantsWrapper>
       </FormWrapper>
    );
  }
}

export default PlantBook;

const FormWrapper =styled.div`
      width: 100%;
      height: 100%;
      text-align: center;
      padding-top: 50px;  
      h1{ 
          margin: auto;
          width: 40%;
          box-shadow: 0 2px  2px 2px grey;
          margin-bottom : 10px;
      }
`
const PlantsWrapper= styled.div`
     display: flex;
     flex-wrap: wrap;
`
const PlantBar = styled.div`
    //box-shadow:  0px .7px .5px  purple;
    text-align : left;
    width: 200px;
    border-radius: 5px;
    margin: 10px auto;
    font-size: 18px;
    font-weight: 600;
`