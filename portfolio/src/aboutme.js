import './index.css'
import { useInView } from 'react-intersection-observer';
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


function Aboutme() {
    const { ref, inView, entry } = useInView(); // this is the useInView component. It takes a ref and declares true 
                                               // when the element with the attached ref is in frame of the browser window.
                                              // The inview is the state IE True/False and entry is the event info. 
 
    return (
    <div id = 'about-me-wrapper'>
            <h2 id = 'about-me-page-title' ref={ref}>{console.log(inView, entry)} - About Me - </h2>
            <p className='about-me-text-content'>Hi! I'm Luke...and I love building things!</p>
            <p></p>
            <p className='about-me-text-content'>From building my first computer at 12 years old to graduating with an electrical engineering degree I have always
                been curious about how things work "under the hood". My love of development grew from using low-level languages (C++/C) in my degree 
                where I found myself being drawn more to the design and UI/UX aspect of software development.  </p>
                <p></p>
            <p className='about-me-text-content'>While studying for my degree I worked as a project co-ordinator for an FTSE 500 company within a software-orientated
                engineering team. I believe this experience of working and studying full-time demonstrates my passion for continual 
                professional development and gives me key insight into the management behind software-based project rollouts 
                in addition to my software development and engineering experience.  </p>
                <p></p>
            <h2 id = 'about-me-tech-stack-title'>- My Skills -</h2>
            <div id = 'grid-container'>
        <div className = 'about-me-content-wrapper'>
        <div className='grid-square' id = 'grid-square-1'>
            <img className='icon' src={htmlIcon}></img>
            <div>HTML 5</div>
        </div>
        <div className='grid-square' id = 'grid-square-2'>
            <img className='icon' src={cssIcon}></img>
            <div>CSS 3</div>
        </div>
        <div className='grid-square' id = 'grid-square-3'>
            <img className='icon' src={jsIcon}></img>
            <div>Javascript</div>
        </div>
        <div className='grid-square' id = 'grid-square-4'>
            <img className='icon' src={typescriptIcon}></img>
            <div>Typescript</div>
        </div>

        <div className='grid-square' id = 'grid-square-5'>
            <img className='icon' src={reactIcon}></img>
            <div>React</div>
        </div>
        <div className='grid-square' id = 'grid-square-6'>
            <img className='icon' src={mongoIcon}></img>
            <div>Mongo DB</div>
        </div>
        <div className='grid-square' id = 'grid-square-7'>
            <img className='icon' src={nextjsIcon}></img>
            <div>Next.js</div>
        </div>
        <div className='grid-square' id = 'grid-square-8'>
            <img className='icon' src={nodejsIcon}></img>
            <div>Node.js</div>
        </div>

        <div className='grid-square' id = 'grid-square-9'>
            <img className='icon' src={gitIcon}></img>
            <div>Git</div>
        </div>
        <div className='grid-square' id = 'grid-square-10'>
            <img className='icon' src={webpackIcon}></img>
            <div>Webpack</div>
        </div>
        <div className='grid-square' id = 'grid-square-11'>
            <img className='icon' src={npmIcon}></img>
            <div>NPM</div>
        </div>
        <div className='grid-square' id = 'grid-square-12'>
            <img className='icon' src={fireBase}></img>
            <div>Firebase</div>
        </div>

        </div>
            </div>
    </div>
        
    )
}

export default Aboutme;