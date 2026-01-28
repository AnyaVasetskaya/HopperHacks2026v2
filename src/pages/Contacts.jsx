import React from 'react';
import contactsBanner from "../assets/contacts banner.PNG"
import './Pages.css';
import { FaInstagram, FaGlobe, FaEnvelope, FaDiscord, FaLinkedin } from 'react-icons/fa';

// Export icons for use in this component
export const instagramIcon = FaInstagram;
export const websiteIcon = FaGlobe;
export const emailIcon = FaEnvelope;
export const discordIcon = FaDiscord;
export const linkedinIcon = FaLinkedin;

const Contacts = () => {

  const InstagramIcon = instagramIcon;
    const WebsiteIcon = websiteIcon;
    const EmailIcon = emailIcon;
    const DiscordIcon = discordIcon;
    const LinkedinIcon = linkedinIcon;
  return (
    <div>
      <p className='section-title'>~Contacts~</p>
      <div className='contacts-container'>
        <img className='contacts-banner' src={contactsBanner} alt="contacts banner"/>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='contact-icon' style={{left: '15%', top: '25%'}}>
          <InstagramIcon className='icon-svg' color="#51170b" />
        </a>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className='contact-icon' style={{left: '32.5%', top: '30%'}}>
          <WebsiteIcon className='icon-svg' color="#51170b" />
        </a>
        <a href="mailto:your@email.com" className='contact-icon' style={{left: '50%', top: '30%'}}>
          <EmailIcon className='icon-svg' color="#51170b" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className='contact-icon' style={{left: '67.5%', top: '30%'}}>
          <DiscordIcon className='icon-svg' color="#51170b" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='contact-icon' style={{left: '85%', top: '25%'}}>
          <LinkedinIcon className='icon-svg' color="#51170b" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
