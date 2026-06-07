 import React from 'react'
 import movieFinder from'./assets/movie_finder.jpg'
 import habitTracer from './assets/habit_tracer.png'
 import loginPage from './assets/login_page.jpg'

 function Projects () {
    return (
        <>
        <h1 className = "proj"> My Projects</h1> 
        <div className ="projects">
            
             <div className = "proj3">
                <img src={ loginPage} alt="login page project"/>
                <h2 >Login Page</h2>
                <p> A simple login page with form validation and responsive design</p>
                 
                <h3>Tech Stack: HTML, CSS</h3>
                <div className = "btn-head">
                    <button className="btn" ><a href="https://jaanvicreates.github.io/login-page/" target="_blank">View Project</a></button>
                    <button className="btn"><a href="https://github.com/jaanvicreates/login-page.git" target="_blank">GitHub repo</a></button>
                </div>
            </div>
            <div className = "proj1">
                 <img src={ movieFinder} alt="movie finder project"/>
                <h2 >Movie finder</h2>
                <p> A web app with dynamic search, responsive UI and API powered fetching data</p>
                
                <h3>Tech Stack: HTML, CSS, JS</h3>
                <div className = "btn-head">
                    <button className="btn" ><a href="https://jaanvicreates.github.io/movie-finder/" target="_blank">View Project</a></button>
                    <button className="btn"><a href="https://github.com/jaanvicreates/movie-finder.git" target="_blank">GitHub repo</a></button>
                </div>
            </div>
            <div className = "proj2">
                 <img src={ habitTracer} alt="habit tracer project"/>
                <h2 >Habit Tracer</h2>
                <p> A web app to track daily habits and build positive routines</p>
                
                <h3>Tech Stack: HTML, CSS, JS, reactJs</h3>
                <div className = "btn-head">
                    <button className="btn" ><a href="https://jaanvicreates.github.io/habit-tracer/" target="_blank">View Project</a></button>
                    <button className="btn"><a href="https://github.com/jaanvicreates/habit-tracer.git" target="_blank">GitHub repo</a></button>
                </div>
            </div>
             
            




        </div>
         
        
        
        
        </>
         
    );

 }
 export default Projects;