import { motion } from 'framer-motion'
import { IconButton, Stack } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.scss'

export default function AboutUs() {
  const services = [
    "Web designing",
    "SEO/SEM",
    "Marketing Campaigns",
    "Digital insights",
    "Product Launches",
    "Rebranding/Reimagining",
    "Social Media Campaigns",
    "Digitalization"
  ]

  function handleClick() {
    // maybe link to somewhere
  }

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

  // const mainVariants = {
  //   offscreen: {
  //     y: -300
  //   },
  //   onscreen: {
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.8
  //     }
  //   }
  // }

  // const subVariants = {
  //   offscreen: {
  //     y: 300
  //   },
  //   onscreen: {
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.8
  //     }
  //   }
  // }

  return (
    <motion.div className="AboutUs">
      <motion.div className="main"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <h1>Who We Are</h1>
        <p>We are a bunch of awesome people with <span className="key-words">diverse culture</span> and backgrounds. Our happy Clients are a testimonial of how great people do great work. Our Co-Founders are the backbone of our success.</p>
      </motion.div>

      <div className="team">
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
          <motion.div variants={leftVariants}
                      className="profile-pic">
              <img src={process.env.PUBLIC_URL + '/assets/images/KunalSquare.JPG'} alt="Kunal Sirsalewala" />
          </motion.div>
          <motion.div variants={rightVariants} className="profile-text">
            <h3>Kunal Sirsalewala</h3>
            <p>A storyteller and a visionary. He has a pool of never-ending pool of unique ideas and a massive SDD installed. He never runs out of his quirky ideas. You can see a twinkle in his eye when he shows his vision to all. Kunal our Co-founder along with Nadège head our Marketing team. He also heads our Finance department. If not storytelling you see him either playing Chess or Sudoku</p>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton aria-label="twitter" component="span">
                <a href="https://twitter.com/ashhhleyhere" target="_blank" rel="noreferrer"><TwitterIcon fontSize="large" /></a>
              </IconButton>
              
                  
              <IconButton aria-label="linkedin" component="span">
                <a href="https://www.linkedin.com/in/kunal-sirsalewala-95998b241/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" /></a>
              </IconButton>

              <IconButton aria-label="instagram" component="span">    
                <a href="https://www.instagram.com/heyitsjustashleyhere/" target="_blank" rel="noreferrer"><InstagramIcon fontSize="large" /></a>  
              </IconButton>
            </Stack>
          </motion.div>
        </motion.section>

        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 1 }} >
          <motion.div variants={leftVariants}
                      className="profile-text">
                        
            <h3>Ashley Jiang</h3>
            <p>A cat loving Web Developer Ninja with a sweet tooth is a girl on a mission. She redefines the possibilities of what a website can do. She is our co-founder and heads the Web team. If you don’t see her with her laptop, she is probably gone biking and listening to true-crime podcasts.</p>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton aria-label="twitter" component="span">
                <a href="https://twitter.com/ashhhleyhere" target="_blank" rel="noreferrer"><TwitterIcon fontSize="large" /></a>
              </IconButton>
              
                  
              <IconButton aria-label="linkedin" component="span">
                <a href="https://www.linkedin.com/in/ashley-jiang-b623a9ab/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" /></a>
              </IconButton>

              <IconButton aria-label="facebook" component="span">
                <a href="https://www.facebook.com/jiangsterYELHSA" target="_blank" rel="noreferrer"><FacebookIcon fontSize="large" /></a>  
              </IconButton>

              <IconButton aria-label="instagram" component="span">    
                <a href="https://www.instagram.com/heyitsjustashleyhere/" target="_blank" rel="noreferrer"><InstagramIcon fontSize="large" /></a>  
              </IconButton>

              <IconButton aria-label="github" component="span">
                <a href="https://github.com/heyitsashleyhere" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large" /></a>  
              </IconButton>
            </Stack>
          </motion.div>
          <motion.div variants={rightVariants} className="profile-pic">
            <img src={process.env.PUBLIC_URL + '/assets/images/AshleySquare.JPG'} alt="Ashley Jiang" />
          </motion.div>
        </motion.section>

        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
          <motion.div variants={leftVariants}
                      className="profile-pic">
              <img src={process.env.PUBLIC_URL + '/assets/images/NadegeSquare.JPG'} alt="Kunal Sirsalewala" />
          </motion.div>
          <motion.div variants={rightVariants} className="profile-text">
            <h3>Nadège Ngouah</h3>
            <p>A true artist of thoughts and emotions. A master Task manager and a leader from the front. Nadège has a ready solution for everything. Be it for a brand or an Individual, she can set you rolling almost immediately. Nadège our Co-founder along with Kunal does a fabulous job by helping our clients Express themselves with ease. “Born to Dance”</p>

            <Stack direction="row" alignItems="center" spacing={2}>
        
              <IconButton aria-label="linkedin" component="span">
                <a href="https://www.linkedin.com/in/nad%C3%A8ge-ngouah-6731b4216/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" /></a>
              </IconButton>

              <IconButton aria-label="facebook" component="span">
                <a href="https://www.facebook.com/nad.ege.3538039/" target="_blank" rel="noreferrer"><FacebookIcon fontSize="large" /></a>  
              </IconButton>

            </Stack>
          </motion.div>
        </motion.section>

      </div>

      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} className="main sub">
        <h1>Our Mission</h1>
        <p id="mission">"We express you"</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} className="main sub">
        <h1>What We Do</h1>
        <Stack direction={{ xs: 'column', sm: 'row' }}
               spacing={{ xs: 1, sm: 2, md: 4 }}
               justifyContent="center" alignItems="center"
               className='service-wrapper' >
          {services.map(service => (
            <div key={service} className="service"
                 onClick={handleClick}>{service}</div>
          ))}

        </Stack>
      </motion.div>

      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} className="main sub">
        <h1>How We Do</h1>
        <p>Boundaries can often limit creativity. Therefore, we got rid of them. Taking full liberty on being creative has helped us produce some great work. </p>
      </motion.div>
      
    </motion.div>
  )
}
