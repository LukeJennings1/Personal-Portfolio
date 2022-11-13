import memoryCardGameImage from './assets/memoryCardGame.png'
import wheresWallyGame from './assets/wheresWally.png'
import EcomSite from './assets/EcomSite.png'
import weatherAPIApp from './assets/weatherAPI.png'
import placeHolder from './assets/placeholder.png'
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';

function Projects() {

const ProjectCard1 = useRef()
const ProjectCard2 = useRef()
const ProjectCard3 = useRef()
const ProjectCard4 = useRef()
const ProjectCard5 = useRef()
const ProjectCard6 = useRef()
const thumbailImage1 = useRef()
const thumbailImage2 = useRef()
const thumbailImage3 = useRef()
const thumbailImage4 = useRef()
const thumbailImage5 = useRef()
const thumbailImage6 = useRef()
const header1 = useRef()
const header2 = useRef()
const header3 = useRef()
const header4 = useRef()
const header5 = useRef()
const header6 = useRef()

const createContent = (projectCard, thumbailImage, header) => {
    projectCard.current.id = 'project-grid-square-animation1'
    thumbailImage.current.id += 'fadeClass'
    header.current.id += 'header-reveal-animation-class'
}
const exitContent = (projectCard, thumbailImage, header) => {
    projectCard.current.id = 'project-grid-square-animation-initial'
    thumbailImage.current.id = ''
    header.current.id = ''
}
    return (
    <div id = 'projects-wrapper'>
        <h2 id = 'projects-page-title'>- Projects -</h2>
    
    <div className = 'projects-grid-wrapper'>
        <div className="projects-grid-square" 
        onMouseEnter={() => {createContent(ProjectCard1, thumbailImage1, header1)}}
        onMouseLeave = {() => {exitContent(ProjectCard1, thumbailImage1, header1)}}>
            <div className='project-title-card'>
                <div className='project-title-card-header' ref={header1}>
                    <h1 className='project-title'>Project Title</h1>
                    <h2 className='project-title project-subheading'>Technology Stack Used</h2>
                </div>
                <div className='project-info-card-button-wrapper'
                 ref = {ProjectCard1} >
                     <a href='https://github.com/LukeJennings1' target="_blank">
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    </a>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage1} src={placeHolder}></img>
        </div>
        <div className="projects-grid-square"
         onMouseEnter={() => {createContent(ProjectCard2, thumbailImage2, header2)}}
         onMouseLeave = {() => {exitContent(ProjectCard2, thumbailImage2, header2)}}>
        <div className='project-title-card'>
                <div className='project-title-card-header' ref={header2}>
                    <h1 className='project-title'>Project Title</h1>
                    <h2 className='project-title project-subheading'>Technology Stack Used</h2>
                </div>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard2}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage2} src={placeHolder}></img>
        </div>
        <div className="projects-grid-square" 
         onMouseEnter={() => {createContent(ProjectCard3, thumbailImage3, header3)}}
         onMouseLeave = {() => {exitContent(ProjectCard3, thumbailImage3, header3)}}>
        <div className='project-title-card'>
                <div className='project-title-card-header' ref={header3}>
                    <h1 className='project-title'>Project Title</h1>
                    <h2 className='project-title project-subheading'>Technology Stack Used</h2>
                </div>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard3}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage3} src={wheresWallyGame}></img>
        </div>
        <div className="projects-grid-square"
        onMouseEnter={() => {createContent(ProjectCard4, thumbailImage4, header4)}}
        onMouseLeave = {() => {exitContent(ProjectCard4, thumbailImage4, header4)}}>
        <div className='project-title-card'>
                <div className='project-title-card-header' ref={header4}>
                    <h1 className='project-title'>Project Title</h1>
                    <h2 className='project-title project-subheading'>Technology Stack Used</h2>
                </div>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard4}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage4} src={EcomSite}></img>
        </div>
        <div className="projects-grid-square"
        onMouseEnter={() => {createContent(ProjectCard5, thumbailImage5, header5)}}
        onMouseLeave = {() => {exitContent(ProjectCard5, thumbailImage5, header5)}}>
        <div className='project-title-card'>
                <div className='project-title-card-header' ref={header5}>
                    <h1 className='project-title'>Project Title</h1>
                    <h2 className='project-title project-subheading'>Technology Stack Used</h2>
                </div>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard5}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage5} src={memoryCardGameImage}></img>
        </div>
        <div className="projects-grid-square"
        onMouseEnter={() => {createContent(ProjectCard6, thumbailImage6, header6)}}
        onMouseLeave = {() => {exitContent(ProjectCard6, thumbailImage6, header6)}}>
        <div className='project-title-card'>
                <div className='project-title-card-header' ref={header6}>
                    <h1 className='project-title'>Project Title</h1>
                    <h2 className='project-title project-subheading'>Technology Stack Used</h2>
                </div>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard6}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage6} src = {weatherAPIApp}></img>
        </div>
    </div>

    </div>
        
    )
}

export default Projects;