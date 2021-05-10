import React, {Component} from 'react';
import {withRouter} from 'react-router';
import NavBar from './navBar'
import '../style/contactPage.css'



class ContactPage extends Component{

    render(){
        return(
            <div className="contact">
                <NavBar/>
                <div id='join'>
                    <div id='text1'>
                        <h1>Join Us!</h1>
                        <h2>This website will be a place for Latinx womxn to share their stories. Feel free to send us an email for the steps to submit your story! </h2>
                        <button type='button'className="button"><a href='mailto:ltorres2017@gmail.com? subject= "Chola Submission"'>Story Submission</a> </button>
                    </div>
                </div>

                <div id="sister">
                    <div id='text2'>
                    <h1>Behind The Activist</h1>
                    <h2>Make sure to check out our sistxr site that shows the collaborations between students and activists into media projects through the International Women's Network Militarism</h2>
                    <button type='button' className="button"><a href="http://behindtheactivist.org">Behind The Activist</a></button>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default withRouter(ContactPage)