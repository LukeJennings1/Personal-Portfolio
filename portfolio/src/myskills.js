import htmlIcon from './assets/html5-plain.svg'
import cssIcon from './assets/css3-plain.svg'
import jsIcon from './assets/javascript-plain.svg'
import typescriptIcon from './assets/typescript-plain.svg'
import reactIcon from './assets/react-original.svg'
import mongoIcon from './assets/mongodb-plain.svg'
import nextjsIcon from './assets/next-js-white.svg'
import nodejsIcon from './assets/nodejs-plain.svg'
import gitIcon from './assets/git-plain.svg'
import webpackIcon from './assets/webpack-plain.svg'
import npmIcon from './assets/npm-original-wordmark.svg'
import fireBase from './assets/firebase-plain.svg'
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';

function Myskills() {

    const { ref, inView, entry } = useInView();

const icon1 = useRef()
const icon2 = useRef()
const icon3 = useRef()
const icon4 = useRef()
const icon5 = useRef()
const icon6 = useRef()
const icon7 = useRef()
const icon8 = useRef()
const icon9 = useRef()
const icon10 = useRef()
const icon11 = useRef()
const icon12 = useRef()


    if (inView === true){
        icon1.current.id += 'icon1';
        icon5.current.id += 'icon5';
        icon9.current.id += 'icon9';

        icon2.current.id += 'icon2';
        icon6.current.id += 'icon6';
        icon10.current.id += 'icon10';

        icon3.current.id += 'icon3';
        icon7.current.id += 'icon7';
        icon11.current.id += 'icon11';

        icon4.current.id += 'icon4';
        icon8.current.id += 'icon8';
        icon12.current.id += 'icon12';
    }

    return (
<>
        <h2 id = 'about-me-tech-stack-title' >{console.log(inView)}- My Skills -</h2>
            <div id = 'grid-container'>
        <div className = 'about-me-content-wrapper'>
        <div className='grid-square' ref={ref} id = 'grid-square-1'>
            <img className='icon' src={htmlIcon} ref ={icon1}></img>
            <div>HTML 5</div>
        </div>
        <div className='grid-square' id = 'grid-square-2'>
            <img className='icon'   src={cssIcon} ref ={icon2}></img>
            <div>CSS 3</div>
        </div>
        <div className='grid-square' id = 'grid-square-3'>
            <img className='icon'  src={jsIcon} ref ={icon3}></img>
            <div>Javascript</div>
        </div>
        <div className='grid-square' id = 'grid-square-4'>
            <img className='icon'  src={typescriptIcon} ref ={icon4}></img>
            <div>Typescript</div>
        </div>
        <div className='grid-square' id = 'grid-square-5'>
            <img className='icon' src={reactIcon} ref ={icon5}></img>
            <div>React</div>
        </div>
        <div className='grid-square' id = 'grid-square-6'>
            <img className='icon'   src={mongoIcon} ref ={icon6}></img>
            <div>Mongo DB</div>
        </div>
        <div className='grid-square' id = 'grid-square-7'>
            <img className='icon'  src={nextjsIcon} ref ={icon7}></img>
            <div>Next.js</div>
        </div>
        <div className='grid-square' id = 'grid-square-8'>
            <img className='icon'  src={nodejsIcon} ref ={icon8}></img>
            <div>Node.js</div>
        </div>

        <div className='grid-square' id = 'grid-square-9'>
            <img className='icon' src={gitIcon} ref ={icon9}></img>
            <div>Git</div>
        </div>
        <div className='grid-square' id = 'grid-square-10'>
            <img className='icon'  src={webpackIcon} ref = {icon10}></img>
            <div>Webpack</div>
        </div>
        <div className='grid-square' id = 'grid-square-11'>
            <img className='icon'  src={npmIcon} ref ={icon11}></img>
            <div>NPM</div>
        </div>
        <div className='grid-square' id = 'grid-square-12'>
            <img className='icon'  src={fireBase} ref ={icon12}></img>
            <div>Firebase</div>
        </div>

        </div>
            </div>
</>
    )
}

export default Myskills;