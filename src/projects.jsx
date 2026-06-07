 import React from 'react'
 import movieFinder from'./assets/movie_finder.jpg'
 import expenseTracker from './assets/expense_tracker.jpeg'
 import loginPage from './assets/login_page.jpg'

 function Projects () {
    return (
        <>
        <h1 className = "proj"> My Projects</h1> 
        <div className ="projects">
            <div  className = "proj-container">
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
                 <img src={ expenseTracker} alt="expense tracker project"/>
                <h2 >Expense Tracker</h2>
                <p> A web app to track daily expenses and manage budgets</p>
                
                <h3>Tech Stack: HTML, CSS, JS, reactJs</h3>
                <div className = "btn-head">
                    <button className="btn" ><a href="https://expense-tracker-ddhdxnl04-jahnavi-reddy.vercel.app" target="_blank">View Project</a></button>
                    <button className="btn"><a href="https://github.com/jaanvicreates/Expense-tracker.git" target="_blank">GitHub repo</a></button>
                </div>
                  
                 
            </div>
            <p className = "progress">Still in progress....</p>




            </div>
            
              
            
             
            




        </div>
         
        
        
        
        </>
         
    );

 }
 export default Projects;