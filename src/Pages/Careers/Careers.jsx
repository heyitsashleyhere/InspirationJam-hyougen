import { useState } from 'react'
import { motion } from 'framer-motion'
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, 
Typography, TextField, Button, Box, Grid, Modal, Grow, FormControlLabel, Checkbox } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Input from '../ContactUs/Input.jsx'
import './Careers.scss'

const initialFormData = { firstName: '', lastName: '', position:'',  email: '', portfolio: '', resume: ''}

const FileInput = styled('input')({
  display: 'none',
});

export default function Careers() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isApply, setIsApply] = useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [isOpen, setIsOpen] = useState(false)

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setIsExpanded(isExpanded ? panel : false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    textAlign: 'center',
    color: '#262626'
  };

  const mainVariants = {
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


  function handleChange(e) {
      if(e.target.checked === true) {
        setFormData({ ...formData, subscribe: e.target.checked})
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value})
      }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('formData', formData)
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
    setIsApply(false)
    setFormData(initialFormData)
  }

  return (
    <motion.div className="Careers">
      <motion.section className="main"
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.65}}>
          <h2>Creativity, Consistency and Commitment</h2>
          <h2>make a <span className="key-words">Dream Team</span></h2>
      </motion.section>

      <motion.section className="section"
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1}}>
        <Accordion expanded={isExpanded === 'panel1'} onChange={handlePanelChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '1.6rem'  }}>
            🎏 Work Culture
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Limitless thinking and creativity is our motto. We let our teams plan and decide how they handle a project. Flexibility and the ability to talk to anyone and everyone in the office makes us a warm big family.
            </Typography>
          </AccordionDetails>
        </Accordion>
      <Accordion expanded={isExpanded === 'panel2'} onChange={handlePanelChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '1.6rem' }}>🎎 What are we looking for</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you love what you do, are a team player, motivated, CREATIVE, can think differently, observant and loves to listen. You should be able to surprise us all.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={isExpanded === 'panel3'} onChange={handlePanelChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '1.6rem' }}>
            🗻 How to Apply
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Be original, be different. Impress us with what you think best describes you. Always remember less is more. (Highlighting special talents will earn you brownie points) Don't forget to attach your portfolio and resume.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div className='button-wrapper'>
        <Button className="button" variant="contained" onClick={()=> setIsApply(!isApply)}>{isApply ? "Not Now":"Apply Now"}</Button>
      </div>
      
      </motion.section>

      { isApply ? 
      <Grow in>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" style={{textAlign: 'center'}}>Why work with us?</Typography>
        <Typography variant="h3" style={{textAlign: 'center', marginBottom: '1em'}}>We give you the canvas to paint the way you like it.</Typography>
        <Grid container spacing={2}>
          <>
            <Input name="firstName" label="First Name" handleChange={handleChange} half formData={formData}/>
            <Input name="lastName" label="Last Name" handleChange={handleChange} half formData={formData}/>
          </>
          <Input name="position" label="Position applying for" handleChange={handleChange} type="text" formData={formData}/>
          <Input name="email" label="Email Address " handleChange={handleChange} type="email" formData={formData}/>
          <Input name="portfolio" label="Portfolio Url" handleChange={handleChange} type="text" formData={formData}/>
          <Grid item xs={12} >
            <label htmlFor="contained-button-file" style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
              <FileInput accept="image/*" id="contained-button-file" multiple type="file" />
              <Typography variant="p" style={{marginLeft: '0.8em'}}>Resume/CV</Typography>
              <Button variant="outlined" component="span" style={{marginLeft: '1em'}}>
                Upload
              </Button>
            </label>

          </Grid>

          <Grid item xs={12} >
            <TextField name='coverLetter' variant='outlined' label="Anything you'd like to add..." fullWidth 
            margin="dense"
            value={formData.coverLetter}
            multiline rows={7}
            onChange={handleChange} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{mt:2, mb:1}}>Submit</Button>

        <Modal open={isOpen} onClose={handleClose} >
            <Box sx={{ ...style, width: 400 }}>
                <h1 id="modal-title">Submitted</h1>
                <p id="modal-description">
                  Thank you for applying 🎉
                </p>
            </Box>
          </Modal>
      </form>
    </Grow>
    :
    null
      
    }

      

      
    </motion.div>
  )
}
