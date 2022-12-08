import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='max-w-[1240px] bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold neon-text'>Garden Of Heathens</h1>
        <p className='py-4'>Join Our Mission</p>
      </div>
      <Container className="flex">
        <div className='singleCol justify-items-center social-media-icons-white' >
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} className="p-7"/>
            <FontAwesomeIcon icon={faTwitter} className="p-7"/>
            <FontAwesomeIcon icon={faInstagram} className="p-7"/>
            <FontAwesomeIcon icon={faLinkedin} className="p-7"/>
            <FontAwesomeIcon icon={faYoutube} className="p-7"/>
            <FontAwesomeIcon icon={faDiscord} className="p-7"/>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;