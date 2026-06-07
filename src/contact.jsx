import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
function Contact () {
    return(
        <>
        <div className= "contact">
            <h2 >Join my journey at :</h2>
            <div className ="links">
                <a href="https://www.linkedin.com/in/jaanvicreates"><FaLinkedin /></a>
                <a href="https://github.com/jaanvicreates"><FaGithub /></a>
                <a href="https://twitter.com/jaanvicreates"><FaTwitter /></a>
                <a href="https://instagram.com/jaanvicreates"><FaInstagram /></a>



            </div>
             



        </div>
         
        
        
        </>
    );
}
export default Contact;