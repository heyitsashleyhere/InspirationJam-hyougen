import { motion } from 'framer-motion'
import { Chip, IconButton, Stack } from '@mui/material'
import './Services.scss'
import { Link } from 'react-router-dom'


export default function Services() {
  const marketingService = [
    "SEO", "SEA", "Data Analytics", "SMM", "Copywriting", "Content Creation", "Email Marketing"
  ]

  const webdevService = [
    "Wire-framing", "DNS Management", "Frontend Frameworks", "Backend Frameworks", "UX & UI", "Responsive Design"
  ]


  const leftVariants = {
    offscreen: {
      x: -2000
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  const rightVariants = {
    offscreen: {
      x: 2000
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  const topVariants = {
    offscreen: {
      y: -300
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  const bottomVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <motion.div className="Services">
      <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
        <motion.div className="main" variants={topVariants}>
          <h1>Our Services</h1>
          <p>Our digital agency offers many services to drive traffic, generate leads and attract new customers. Either you invest in one or other services we have, all of them are great ways to grow your business over time. If you are looking to scale your business to new heights, then we have exactly what you need in <span className="key-words"><a href="#marketing">Marketing</a></span> and <span className="key-words"><a href="#webDev">Web Development</a></span>.</p>
        </motion.div>
      </motion.section>
      
      
      {/* Marketing */}
      <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
        <motion.div className="title" variants={bottomVariants}>
          <h1 id="marketing">Marketing</h1>
        </motion.div>
      </motion.section>


      <motion.section className="service-wrapper" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
        
        <motion.div className="image-wrapper" variants={rightVariants}>
          <img src={process.env.PUBLIC_URL + '/assets/images/marketing.jpg'} alt="marketing" />
        </motion.div>

        <motion.div className="services" variants={leftVariants}>
            <div className="text-wrapper">
              <p>We take charge of the analysis of your Data by paying attention to the details and solving your problems by bringing digital solutions to your business.</p>
              <p>We also work with the newest software and dive into your data to make your business more visible and successful on the internet.</p>
            </div>
          <Stack direction="row"
                 flexWrap="wrap"
                 gap={1}
                 spacing={1}
                 justifyContent="center" alignItems="center">
            {marketingService.map(service => (
              <Chip label={service} key={service} color="primary" clickable/>
            ))}
          </Stack>

          <Link to="/contactUs">
            <div className="cta-wrapper">    
                <p>Get your free consultation</p>
            </div>
          </Link>
          
        </motion.div>
      </motion.section>


      {/* Web Dev */}
      <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
        <motion.div className="title" variants={bottomVariants}>
          <h1 id="webDev">Web Development</h1>
        </motion.div>
      </motion.section>

      <motion.section className="service-wrapper" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
        <motion.div className="image-wrapper" variants={leftVariants}>
          <img src={process.env.PUBLIC_URL + '/assets/images/webdev.jpg'} alt="webdev"/>
        </motion.div>

        <motion.div className="services" variants={rightVariants}>
          <div className="text-wrapper">
            <p>There are no tech secrets for our professional team of web developers. They will build the website of your dreams and more.</p>
            <p>In fact they have not just the necessary knowledge to understand and apply the creation of layouts, but excel in CSS and HTML languages too.</p>
          </div>

          <Stack direction="row"
                 flexWrap="wrap"
                 gap={1}
                 spacing={1}
                 justifyContent="center" alignItems="center">
            {webdevService.map(service => (
              <Chip label={service} key={service} color="primary" clickable/>
            ))}
          </Stack>
          
          <Link to="contactUs">
            <div className="cta-wrapper">
                <p>Get your free consultation</p>
            </div>
          </Link>
        </motion.div>

      </motion.section>

      

      
    </motion.div>
  )
}
