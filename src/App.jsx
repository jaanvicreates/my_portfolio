import Navbar from './navbar.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'
import Footer from './footer.jsx'
import './portfolio.css'
import Techstack from './Techstack.jsx' 
import Education from './education.jsx'
  
 function App() {
    return(
        <>

            <Navbar/>
            <section id="home">
                <Home/>
            
            </section> 
            <section id="about">
                <About/>
            
            </section> 
            <section id="education">
                <Education/>
            </section>
            <section id="techstack">
                <Techstack/>
            </section>
            <section id="projects">
                <Projects/>
            
            </section> 
            <section id="contact">
                <Contact/>
            </section>
            
            <Footer/>
             
            
        
        
        
        
        </>
         
         
        
        
        
       
          );
 }
 export default App;
 
 