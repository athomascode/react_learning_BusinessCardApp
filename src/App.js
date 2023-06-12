import userImage from './assets/Photo-image.png';
import mailImage from './assets/Mail.png';
import linkedinImage from './assets/linkedin.png';
import twitterImage from './assets/TwitterIcon.png';
import facebookImage from './assets/FacebookIcon.png';
import instagramImage from './assets/InstagramIcon.png';
import githubImage from './assets/GitHubIcon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='business-card-section'>
        <header className='header-section'>
          <img src={userImage} className='user-image' alt='userImage' />
        </header>
        <main className='main-section'>
          <h3>Laura Smith</h3>
          <h5>Frontend Developer</h5>
          <h6>laurasmith.website</h6>
          <div className='social-wrapper'>
            <button className='email-button'>
              <div className='social-wrapper-elements'>
                <img src={mailImage} className='social-image' alt='mailImage' />
                <h5 className='email-text'>Email</h5>
              </div>
            </button>
            <button className='linkedin-button'>
              <div className='social-wrapper-elements'>
              <img src={linkedinImage} className='social-image' alt='linkedinImage' />
                <h5 className='linkedin-text'>LinkedIn</h5>
              </div>
            </button>
          </div>
          <h4>About</h4>
          <p>I am a frontend developer with a particular interest in making things simple
             and automating daily tasks. I try to keep up with security and best practices,
             and am always looking for new things to learn.
          </p>
          <h4>Interests</h4>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur.
           Travel geek. Pop culture ninja. Coffee fanatic
          </p>
        </main>
        <footer className='footer-section'>
          <img src={twitterImage} className='footer-image' alt='twitterImage' />
          <img src={facebookImage} className='footer-image' alt='facebookImage' />
          <img src={instagramImage} className='footer-image' alt='instagramImage' />
          <img src={githubImage} className='footer-image' alt='githubImage' />
        </footer>
      </div>
    </div>
  );
}

export default App;
