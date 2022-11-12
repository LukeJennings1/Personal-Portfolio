import memoryCardGameImage from './assets/memoryCardGame.png'
import wheresWallyGame from './assets/wheresWally.png'
import EcomSite from './assets/EcomSite.png'
import weatherAPIApp from './assets/weatherAPI.png'
import placeHolder from './assets/placeholder.png'

function Projects() {

    return (
    <div id = 'projects-wrapper'>
        <h2 id = 'projects-page-title'>- Projects -</h2>
    
    <div className = 'projects-grid-wrapper'>
        <div className="projects-grid-square">
            <img className="projects-thumbnail-image" src={placeHolder}></img>
        </div>
        <div className="projects-grid-square">
            <img className="projects-thumbnail-image" src={placeHolder}></img>
        </div>
        <div className="projects-grid-square">
            <img className="projects-thumbnail-image" src={wheresWallyGame}></img>
        </div>
        <div className="projects-grid-square">
            <img className="projects-thumbnail-image" src={EcomSite}></img>
        </div>
        <div className="projects-grid-square">
            <img className="projects-thumbnail-image" src={memoryCardGameImage}></img>
        </div>
        <div className="projects-grid-square">
            <img className="projects-thumbnail-image" src = {weatherAPIApp}></img>
        </div>
    </div>

    </div>
        
    )
}

export default Projects;