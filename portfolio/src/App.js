import React from 'react';
import Onload from "./onload";
import Aboutme from './aboutme';
import Projects from './projects';
import ContactMe from './contact';
import "./index.css"

function App() {
  return (
    <div className="site-container">
      <Onload/>
      <Aboutme />
      <Projects />
      <ContactMe />
  </div>
  );
}

export default App;
