import React, {Component} from 'react';
import {withRouter} from 'react-router';
import NavBar from './navBar';
import '../style/makeUp.css';
import Normal from '../img/normalChola.png';
import Clown from '../img/chola clown.png';
import Ice from '../img/ice blue.png';
import Spider from '../img/spider lashes.png';


class MakeUp extends Component{

    render(){
        return(
            <div className="makeup">
                <NavBar/>
                <h1 id="header">Cool Makeup Vids</h1>
                <h3>Coming Soon: Makeup tutorials for each look</h3>
                <div className="gallery"> {/*Clicking on a picture sends you to the video- but the videos dont exist yet */}
                    <a target="_blank" href="">
                        <img src={Normal} alt="Normal Chola"/>
                    </a>
                    <div class="desc">"Normal Chola"</div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="">
                        <img src={Clown} alt="Chola Clown" />
                    </a>
                    <div class="desc">"Chola Clown"</div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="">
                        <img src={Ice} alt="Ice Blue" />
                    </a>
                    <div class="desc">"Ice Blue"</div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="">
                        <img src={Spider} alt="Spider Lahes" />
                    </a>
                    <div class="desc">"Spider Lashes"</div>
                </div>


            </div>
        )
    }
}


export default withRouter(MakeUp)