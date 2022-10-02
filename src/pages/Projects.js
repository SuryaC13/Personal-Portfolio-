
import React from 'react';
import "../styles/Projects.css";
import Proj1 from "../assets/proj1.PNG"
import Proj2 from "../assets/proj2.PNG"
import Button from 'react-bootstrap/Button';
import Proj3 from "../assets/proj3.PNG"

import Proj4 from "../assets/proj4.PNG"

import Proj5 from "../assets/proj5.PNG"

import Proj6 from "../assets/proj6.PNG"


function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>


          <div className="projectList">

                    <div className="card">
                        <img src={Proj1} /><br></br>
                        
                        <div className='pt-8 text-center'>
                       <a href='https://foody-01.herokuapp.com/' target="_blank">
                        <Button variant="outline-success">Live On</Button>{' '}
                        
                      </a>
                      <a href='https://github.com/SuryaC13'   target="_blank">
                          <Button variant="outline-danger">Code</Button>{' '}
                      </a>
                     </div>
                    </div>   

                    <div className="card">
                        <img src={Proj2} /><br></br>
                        
                        <div className='pt-8 text-center'>
                      <a href='https://crypto-react05.herokuapp.com/'   target="_blank">
                        <Button variant="outline-success">Live On</Button>{' '}
                        
                      </a>
                      <a href='https://github.com/SuryaC13'   target="_blank">
                          <Button variant="outline-danger">Code</Button>{' '}
                      </a>
                     </div>
                    </div>  
                    <div className="card">
                        <img src={Proj3} /><br></br>
                        
                        <div className='pt-8 text-center'>
                       <a href='https://wheather-react-app03.herokuapp.com/' target="_blank">
                        <Button variant="outline-success">Live On</Button>{' '}
                        
                      </a>
                      <a href='https://github.com/SuryaC13'   target="_blank">
                          <Button variant="outline-danger">Code</Button>{' '}
                      </a>
                     </div>
                    </div>  
                    <div className="card">
                        <img src={Proj4} /><br></br>
                        
                        <div className='pt-8 text-center'>
                       <a href='https://crypto-react-app01.herokuapp.com/'  target="_blank">
                        <Button variant="outline-success">Live On</Button>{' '}
                        
                      </a>
                      <a href='https://github.com/SuryaC13'   target="_blank">
                          <Button variant="outline-danger">Code</Button>{' '}
                      </a>
                     </div>
                    </div>  
                    <div className="card">
                        <img src={Proj5} /><br></br>
                        
                        <div className='pt-8 text-center'>
                       <a href='https://todo-react-app01.herokuapp.com/' target="_blank">
                        <Button variant="outline-success">Live On</Button>{' '}
                        
                      </a>
                      <a href='https://github.com/SuryaC13'   target="_blank">
                          <Button variant="outline-danger">Code</Button>{' '}
                      </a>
                     </div>
                    </div>    
                    <div className="card">
                        <img src={Proj6} /><br></br>
                        
                        <div className='pt-8 text-center'>
                       <a href='https://react-calc-net.herokuapp.com/' target="_blank">
                        <Button variant="outline-success">Live On</Button>{' '}
                        
                      </a>
                      <a href='https://github.com/SuryaC13'   target="_blank">
                          <Button variant="outline-danger">Code</Button>{' '}
                      </a>
                     </div>
                    </div>                          
            </div>

         


        
        
    </div>
  );
}

export default Projects;

