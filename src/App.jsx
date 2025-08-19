import React  from "react"
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App(){
  return(
    <div>
      <Header/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Education/>
      <Project/>
      <Contact/>
   
    </div>      
  )
}
export default App; 

