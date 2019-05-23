import React from 'react';
import Register from '../Register/Register'
import {Route, Link} from 'react-router-dom';
import Login from '../Login/Login';
import './Form.css';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <Route>
        <div>
        <h1> Water My Plants</h1>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </Route>
    )
  }

}

export default Form;
