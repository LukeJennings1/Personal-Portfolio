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



const createContent = (projectCard, thumbailImage) => {
    console.log('called')
    projectCard.current.id = 'project-grid-square-animation1'
    thumbailImage.current.id += 'fadeClass'
}
const exitContent = (projectCard, thumbailImage) => {
    console.log('fired')
    projectCard.current.id = 'project-grid-square-animation-initial'
    thumbailImage.current.id = ''

}

    return (
    <div id = 'projects-wrapper'>
        <h2 id = 'projects-page-title'>- Projects -</h2>
    
    <div className = 'projects-grid-wrapper'>
        <div className="projects-grid-square" 
        onMouseEnter={() => {createContent(ProjectCard1, thumbailImage1)}}
        onMouseLeave = {() => {exitContent(ProjectCard1, thumbailImage1)}}>
            <div className='project-title-card'>
                <div className='project-info-card-button-wrapper tester-class'
                 ref = {ProjectCard1} >
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage1} src={placeHolder}></img>
        </div>
        <div className="projects-grid-square"
         onMouseEnter={() => {createContent(ProjectCard2, thumbailImage2)}}
         onMouseLeave = {() => {exitContent(ProjectCard2, thumbailImage2)}}>
        <div className='project-title-card'>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard2}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage2} src={placeHolder}></img>
        </div>
        <div className="projects-grid-square" 
         onMouseEnter={() => {createContent(ProjectCard3, thumbailImage3)}}
         onMouseLeave = {() => {exitContent(ProjectCard3, thumbailImage3)}}>
        <div className='project-title-card'>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard3}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage3} src={wheresWallyGame}></img>
        </div>
        <div className="projects-grid-square"
        onMouseEnter={() => {createContent(ProjectCard4, thumbailImage4)}}
        onMouseLeave = {() => {exitContent(ProjectCard4, thumbailImage4)}}>
        <div className='project-title-card'>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard4}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage4} src={EcomSite}></img>
        </div>
        <div className="projects-grid-square"
        onMouseEnter={() => {createContent(ProjectCard5, thumbailImage5)}}
        onMouseLeave = {() => {exitContent(ProjectCard5, thumbailImage5)}}>
        <div className='project-title-card'>
                <div className='project-info-card-button-wrapper'
                ref = {ProjectCard5}>
                    <button className='live-code-project-grid-buttons'>Repository</button>
                    <button className='live-code-project-grid-buttons'>Live Demo</button>
                </div>
            </div>
            <img className="projects-thumbnail-image" ref={thumbailImage5} src={memoryCardGameImage}></img>
        </div>
        <div className="projects-grid-square"
        onMouseEnter={() => {createContent(ProjectCard6, thumbailImage6)}}
        onMouseLeave = {() => {exitContent(ProjectCard6, thumbailImage6)}}>
        <div className='project-title-card'>
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