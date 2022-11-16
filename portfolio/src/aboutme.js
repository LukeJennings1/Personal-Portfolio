import './index.css'
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';
import Myskills from './myskills';
import aboutMeIcon from './assets/icons8-bookmark-480 (2).png'
import homeIcon from './assets/icons8-bookmark-480 (1).png'
import skillsIcon from './assets/icons8-bookmark-480 (6).png'
import projectsIcon from './assets/icons8-bookmark-480 (4).png'
import contactIcon from './assets/icons8-bookmark-480 (5).png'






function Aboutme() {
    const { ref, inView, entry } = useInView(); // this is the useInView component. It takes a ref and declares true 
                                               // when the element with the attached ref is in frame of the browser window.
                                              // The inview is the state IE True/False and entry is the event info. 
    const aboutMeAnimation1 = useRef()
    const aboutMeAnimation2 = useRef()
    const aboutMeAnimation3 = useRef()
    const fadeInAnimation = useRef()

    let isInView = null
    if (inView === true) {
        isInView = true
    }
    const fadeRight = useRef()
    const fadeLeft = useRef()
     if (isInView === true) {
         fadeRight.current.className += 'animationRight'
         fadeLeft.current.className += 'animationLeft'
         aboutMeAnimation1.current.id += 'about-me-text-content-animation'
         aboutMeAnimation2.current.id += 'about-me-text-content-animation2'
         aboutMeAnimation3.current.id += 'about-me-text-content-animation3'
     }
 


    return (
    <div id = 'about-me-wrapper'>
        
        <div className='bookMark-wrapper fadeAnimation' ref={fadeInAnimation}>
            <a href='.onload-wrapper' className = 'bookMark' id = 'bookmark1'>
                <img className = 'bookMark' src={homeIcon}></img>
            </a>
            <a href ='#about-me-page-title' className = 'bookMark' id = 'bookmark2'>
                <img className = 'bookMark' src={aboutMeIcon}></img>
            </a>
            <a href ='#about-me-tech-stack-title' className = 'bookMark' id = 'bookmark3'>
                <img  className = 'bookMark' src={skillsIcon}></img>
            </a>
            <a href ='#projects-wrapper' className = 'bookMark' id = 'bookmark4'>
                <img className = 'bookMark' src={projectsIcon}></img>
            </a>
            <a href ='#contact-me-page-title' className = 'bookMark' id = 'bookmark5'>
                <img  className = 'bookMark' src={contactIcon}></img>
            </a>              
      </div>

            <h2 id = 'about-me-page-title' ref={ref}>
            
                
            <div ref = {fadeRight} id = 'fade-right-about-me'>-</div>
               About Me
             <div ref = {fadeLeft} id = 'fade-left-about-me'>-</div>
             </h2>
            <p className='about-me-text-content' ref={aboutMeAnimation1} >Hi! I'm Luke...and I love building things!</p>
            <p></p>
            <p className='about-me-text-content' ref={aboutMeAnimation2} >From building my first computer at as a kid to graduating with an electrical engineering degree I have always
                been curious about how things work "under the hood". My love of development grew from using low-level languages (C++/C) in my degree 
                where I found myself being drawn more to the design and UI/UX aspect of software development.  </p>
                <p></p>
            <p className='about-me-text-content' ref={aboutMeAnimation3} >While studying for my degree I worked as a project co-ordinator for an FTSE 500 company within a software-orientated
                engineering team. I believe this experience of working and studying full-time demonstrates my passion for continual 
                professional development and gives me key insight into the management behind software-based project rollouts 
                in addition to my software development and engineering experience.  </p>
                <p></p>

            <Myskills />
    </div>
        
    )
}

export default Aboutme;