import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom"
import NavBar from './navBar'
import '../style/homePage.css'


class HomePage extends Component{

    render(){
        return(
            <div className="home">
                <div id= "nav"> <NavBar/>  </div>

                <div id ="title">
                    <p>
                        Welcome to “Me Gusta Tu Eyeliner”: An installation piece
                        and interactive space for Pachuca, Chola, Homegirl, and Diosa narratives! 
                        I invite you to explore the style, it’s history, and see it’s nuance as both insiders and outsiders of the community!
                    </p>
                    
                    <button type='button' className="button"><Link to="/exhibit">Virtual Space </Link></button>
                    <button type='button'className="button"> <Link to="/ourstory"> Nuestras Historias </Link> </button>
                    <button type='button'className="button"><Link to="/makeup"> Make-Up Vids </Link></button>
                </div>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/pqb9hYGWoTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}


export default withRouter(HomePage)