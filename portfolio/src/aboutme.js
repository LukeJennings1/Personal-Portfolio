import './index.css'
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';
import Myskills from './myskills';
import aboutMeIcon from './assets/about.png'
import homeIcon from './assets/homeMAIN.png'
import skillsIcon from './assets/skills.png'
import projectsIcon from './assets/projects.png'
import contactIcon from './assets/contact.png'






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
            <p className='about-me-text-content' ref={aboutMeAnimation2} >I'm a dedicated full-stack developer at Book a Builder UK, bringing a unique perspective to software development with a degree in electrical engineering. In my current role, I focus on enhancing the user experience on the customer-facing site, optimizing the job-finding algorithm, and ensuring a seamless platform for users to connect with skilled tradespeople.</p>
                <p></p>
            <p className='about-me-text-content' ref={aboutMeAnimation3} >Proficient in Next.js, Vanilla JS, PHP, CSS3, and HTML5, I specialise in implementing new features across the client-facing site and backend CMS system. Whether leveraging the capabilities of Next.js or applying the fundamentals of Vanilla JS, each line of code is crafted to contribute to an exceptional user experience. A notable achievement has been a 60% increase in website production efficiency for tradespeople, achieved through streamlined processes since joining Book a Builder. </p>
                <p></p>

            <Myskills />
    </div>
        
    )
}

export default Aboutme;