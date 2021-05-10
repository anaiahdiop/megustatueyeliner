import React, {Component} from 'react';
import {withRouter} from 'react-router';
import NavBar from './navBar'
import '../style/featuredPage.css'
import Yesenia from '../img/yessie.png'
import Carlos from '../img/Carlos G.png'



class FeaturedPage extends Component{

    render(){
        return(
            <div className="featured">
                <NavBar/>
                <h1>Featured Artists</h1>
                <div id='yessie'>
                    <img src={Yesenia} alt="Yesenia"/>
                    <h1>Yesenia de Casas</h1>
                    <p className="p"> Yesenia de Casas aka Vaga, is a: graffiti artist, filmmaker, and multi-medium creator from the neighborhood of MacArthur Park. Their background as a first generation child of Mexican Immigrants and their own identification as Chicanx has heavily influenced their work over the past five years. While Vaga has their hands in several different artistic ventures, their graffiti has acted as a grounding mechanism and place of safety during difficult times. Much of their art has culminated on instagram through their personal page @Rhythm.me.this, and are currently in the midst of curating a new art account: @FoolitaUnit. Leslie Torres was inspired by Vaga’s ability to lean into Chicano culture and Chola style through graffiti art and lettering. Vaga became involved in the Me Gusta Tu Eyeliner as the creator of all the spray paint-inspired graphic designed lettering. Their work tied together the piece as a reflection of the friendships and art that was traded between Cholas.</p>
                    <h2>Insta:</h2>
                    <div className='insta'>
                        <div>Personal: <a href="https://www.instagram.com/rhythm.me.this/" target="_blank">@Rhythm.me.this</a></div>
                        <div>Business: <a href="https://www.instagram.com/FoolitaUnit/" target="_blank">@FoolitaUnit</a></div>
                    </div>
                </div>
                <hr class="rounded"></hr>

                <div id='carlos'>
                    <img src={Carlos} alt="Carlos"/>
                    <h1>Carlos Gonzalez</h1>
                    <p className="p">Carlos González is an aspiring lawyer and multimedia collage artist from the neighborhood or Highland Park. He is a proud Guatemalteco and was raised by a powerful mom, who inspires him everyday. Carlos is a recent grad of Oxy, class of 2019! After finishing his Spanish major, he was looking through a local yard sale and ended up buying a stack of vintage magazines. Over the past 2 years, he has dedicated his free time to pasting together complex and engaging collage pieces. He takes inspiration from nature and his own culture to layer and texture collages, taking his time to hand paste every image. His hard work led to the eventual creation of his Instagram Page: @simplecollages. His artwork has inspired artists like Leslie Torres to begin doing collage work earlier this year. Together they collaborated on Me Gusta Tu Eyeliner</p>
                    <h2>Insta:</h2>
                    <div className='insta'>
                        <a href="https://www.instagram.com/simplecollages/" target="_blank">@simplecollages</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(FeaturedPage)

