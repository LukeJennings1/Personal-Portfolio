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

function Myskills() {

    return (
<>
        <h2 id = 'about-me-tech-stack-title'>- My Skills -</h2>
            <div id = 'grid-container'>
        <div className = 'about-me-content-wrapper'>
        <div className='grid-square' id = 'grid-square-1'>
            <img id='icon1' className='icon' src={htmlIcon}></img>
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
</>
    )
}

export default Myskills;