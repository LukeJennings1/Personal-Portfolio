import githubLogo from './assets/GitHub-Mark-Light-64px.png'

function footer() {


    return (
        
        <div className="footer-wrapper"> 
            <div className='content-wrapper-footer'>
                    <div className="made-by">Made By
                    <div id = 'name-styling-footer'>Luke Jennings 2022</div> 
                    <a href='https://github.com/LukeJennings1'>
                    <img id = 'github-logo' src={githubLogo} ></img>
                    </a>
                </div>
            </div>
        </div>
        
    )
}



export default footer;