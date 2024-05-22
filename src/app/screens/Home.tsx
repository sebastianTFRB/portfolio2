import'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faXTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  return (
    <div >
    <Container>
        <h1 className='text-center'> hello world</h1>
        <div>
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook }/>
            </a>
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faInstagram }/>
            </a>
            <a href="https://facebook.com">
            <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://facebook.com">
            <FontAwesomeIcon icon={faGithub} />
            </a>

        </div>
    </Container>    
     

    </div>
  )
}

export default Home
