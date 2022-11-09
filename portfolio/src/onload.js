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
    <img className = 'scrollIcon' id = 'scroll-down-icon' src={scrollIcon}></img>
    </div>
    )
}


export default Onload;