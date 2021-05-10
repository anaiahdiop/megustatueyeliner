import React, { Component } from "react";
import Room from '../components/room'
import {withRouter} from 'react-router';
import NavBar from './navBar'
import '../style/Virtual.css'

class VirtualPage extends Component{

  render(){
    return (
    
      <div className="virtual">
        <NavBar/>
        <p>Click and drag the square to move</p>
        <p>Hold shift and drag to move left,right,up and down</p>
        <p>Pinch in and out to zoom</p>
        <div id="exhibit">
          <Room/>
        </div>
      </div>
    );
  }
}

export default withRouter(VirtualPage);
 