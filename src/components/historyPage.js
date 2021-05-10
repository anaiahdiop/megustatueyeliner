import React, {Component} from 'react';
import {withRouter} from 'react-router';
import NavBar from './navBar'
import '../style/history.css'



class HistoryPage extends Component{

    render(){
        return(
            <div className="history">
                <NavBar/>
               <div id ="stories">
                    <p>Nuestras Historias</p>
                    <p>Our Stories</p>
                </div>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/FUwnoaTrtIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1>The Beginning</h1>
                <div className="p">
                    <p>
                    Over a year ago, I applied for a research grant through the Andrew W. Mellon Foundation, with the mentorship of Professor Allison de Fren, to reach out to womxn in my community of Boyle Heights and other Latinx neighborhoods to talk  about their experiences with Chola makeup, it’s impact within their own lives and within their communities, and whether the style was still surviving today.
                    The result was 8 interviews: 6 womxn and 2 men, that were filled with funny, heartfelt, heartbreaking, bold, and nuanced takes on Chola style and it’s impact.
                    </p>
                </div>
                
                <hr class="rounded"></hr>
                <div id="karina">
                    <h1>Karina Sanchez</h1>
                    <div className="p">
                        <p>Karina Sanchez is a first-generation, Mexican-American who shifts her time from Boyle Heights to South Central. She has been someone that I have seen evolve in her make-up experience and truly use make-up as a badge of honor. Her make-up is always bold and confident.</p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0ZyraE4MkLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

            </div>
        )
    }
}


export default withRouter(HistoryPage)