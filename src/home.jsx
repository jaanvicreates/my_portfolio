 import {TypeAnimation} from 'react-type-animation';
 import React from 'react'
 import pic from './assets/pic.jpeg'
 import resume from './assets/resume.pdf'
 function Home () {
    return(
        <>
        
         
        <div className = "home">
             <div className ="left">
            <div className = "img">
                 <img src={pic} alt="profile picture" className="profile-img"/>
            </div> 
             
        </div>
        <div className = "right">
            <div className = "home-head">
                <h2 className = "intro">Hello! I am</h2>
                 <h2 className ="head2"> Jahnavi</h2>
                 <TypeAnimation className ="typewriter" sequence={['Web Developer', 2000, 'Content Writer', 2000, 'Tech Enthusiast', 2000]} wrapper="h2" speed={50} repeat ={Infinity}/>



            </div>
            <a href={resume} download className="home-btn">
              Download Resume
            </a>
             
        </div>
         
         



        
            
         
          




             </div>
        
        
        
        
        </>
         



    );
 }
 export default Home;