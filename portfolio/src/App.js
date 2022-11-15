import React from 'react';
import Onload from "./onload";
import Aboutme from './aboutme';
import Projects from './projects';
import ContactMe from './contact';
import Myskills from './myskills';
import "./index.css"
import aboutMeIcon from './assets/aboutmeIcon.png'
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';


function App() {


  return (
    <div className="site-container">
      <Onload/>
      <Aboutme />
            {/* <div id = 'enter-bookmark' ref={aboutMeRef}></div> */}
      <Projects />
      <ContactMe />
  </div>
  );
}

export default App;
