import sendIcon from './assets/sendIcon.png';
import locationIcon from './assets/locationIcon.png'
import phoneIcon from './assets/phoneIcon.png'
import emailIcon from './assets/emailIcon.png'
import githubIcon from './assets/githubLogoWhite.png'
import linkedInIcon from './assets/linkedInIcon.png'
import discordIcon from './assets/discordIcon.png'

function ContactMe() {


    return (
        <div className="contact-me-page-wrapper"> 
            <h2 id = 'contact-me-page-title'>- Contact Me -</h2>


        <div id = 'conact-me-content-wrapper'>
            <form id = 'contact-me-input-wrapper'>
                <input type='text' className="contact-me-form-inputs" placeholder="Name"></input>
                <input type='email' className="contact-me-form-inputs" placeholder="Email"></input>
                <textarea rows="10" columns ='5' id = 'contact-me-message-input' className="contact-me-form-inputs" placeholder="Message"></textarea>
                <button id = 'contact-me-submit-button'>
                    <img className='send-Icon' src={sendIcon}></img>
                </button>
            </form>
            <div id = 'contact-me-links-wrapper'>
                <div className='contact-me-links'>
                    <img className='send-Icon' src={locationIcon}></img>
                    <h2>Essex, UK</h2>
                </div>
                <div className='contact-me-links'>
                    <img className='send-Icon' src={phoneIcon}></img>
                    <h2>+447375124757</h2>
                </div>               
                <div className='contact-me-links'>
                    <img className='send-Icon' src={emailIcon}></img>
                    <h2 id = 'send-icon-text'>LukeJennings123@gmail.com</h2>
                </div>

                <div className="contact-me-shape"></div>
                <div id='contact-me-social-links'>
                    <div>
                        <a href='https://github.com/LukeJennings1' target="_blank">
                        <img className='link-Icon' src={githubIcon}></img>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/luke-jennings-10123893/' target="_blank">
                        <img className='link-Icon' src={linkedInIcon}></img>
                        </a>
                    </div>

                </div> 

                <div id = 'page-bottom' className="contact-me-shape"></div>

            </div>

        </div>
        </div>
    )
}

export default ContactMe;