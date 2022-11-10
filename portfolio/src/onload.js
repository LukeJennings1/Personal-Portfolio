import './index.css';
import scrollIcon from './assets/scroll.png'
import { useRef } from 'react'

function Onload(props) {




    return (
    <div className = 'onload-wrapper'>
    <h1 id = 'name'>Luke Jennings</h1>
    <h2 id = 'info'>Full-Stack Dev | Engineering Graduate
    <div id = 'info-block'></div>
    </h2>
    <a id = 'scroll-down-wrapper' href="#about-me-wrapper">
    <img className = 'scrollIcon' id = 'scroll-down-icon' src={scrollIcon}></img>
    </a>
    </div>
    )
}


export default Onload;