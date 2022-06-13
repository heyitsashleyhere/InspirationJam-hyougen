import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import { Box, ButtonBase, Typography } from '@mui/material';
import Promo from './Promo.jsx';
import './Home.scss'
import ScrollToBottom from '../components/ToBottom.jsx';
import Portfolio from './Portfolio.jsx';
import { Button } from '@mui/material';

export default function Home() {
  let navigate = useNavigate();

  const meaningStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }

  const videoStyle = {
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    top: 0, left: 0, 
    objectFit: 'cover'
  }

  function handleCTA() {
    navigate('/contactUs')
  }

  function handleCareer() {
    navigate('/careers')
  }

  return (
    <div className='Home'>
      <ScrollToBottom />
      <main style={{ width: '100%', height: '95vh'}}>
        <video src={process.env.PUBLIC_URL + '/assets/videos/videoBg.mp4'} autoPlay loop muted 
               style={videoStyle}/>
        <div style={meaningStyle} className="slogan-wrapper">
          <h1>WE EXPRESS YOU</h1>
          <h3>Marketing & Web Development Agency</h3>
          <div><h2>表現 | ひょうげん | [</h2><i>hyōgen</i><h2>]</h2><VolumeUpIcon /></div>
          <p>A method of expressing one's thoughts, something being used to think with.</p>
        </div>
      </main>

      <motion.div className="phrase-section-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.65}}>
         <p>"Hyōgen is an agency that takes care of all your digital needs to marketing campaigns. We do things differently."</p>
      </motion.div>

      <motion.div className="services-section-wrapper"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: 0.65}}>
          <h4>Services</h4>
          <p>Marketing & Web Development</p>
          <Promo />
      </motion.div>

      <motion.div className="work-section-wrapper"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: 0.65}}>
          <h4>Our Work</h4>
          <Portfolio />
      </motion.div>

      <motion.div className="cta-section-wrapper"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: 0.65}}>
          <div>
            <h4>Get your free consultation</h4>
            <p>Ready to express yourself?</p>
            <p>Send us a message and discover all your possibilities.</p>
            <p>Find out what the best potential of your brand can be.</p>
          </div>
          
          <div className="button-wrapper">
            <Button variant="outlined" color='secondary' onClick={handleCTA} size="large">Send us a message</Button>
          </div>
  
      </motion.div>

      <div className="career-section-wrapper">
          <div>
            <h4>Careers</h4>
            <p>Help others express themselves</p>
            <p>Send us a message and discover all your possibilities.</p>
            <p>Find out what the best potential of your brand can be.</p>
          </div>
          
          <div className="button-wrapper">
            <Button variant="outlined" color='primary' onClick={handleCareer} size="large">Work with us</Button>
          </div>
  
      </div>

      
    </div>
  )
}
