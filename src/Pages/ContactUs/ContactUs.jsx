import { useState } from 'react';
import { motion } from 'framer-motion'
// MUI
import { TextField, Button, Box, Grid, Modal, Grow, FormControlLabel, Checkbox } from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// component
import Input from './Input.jsx';
// style
import './ContactUs.scss'


const initialFormData = { firstName: '', lastName: '', companyName:'',  email: '', phone: '', message: '', subscribe: false}

export default function ContactUs() {
    const [formData, setFormData] = useState(initialFormData)
    const [isOpen, setIsOpen] = useState(false)

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
      setFormData(initialFormData)
    }

    
    return (
        <div className="ContactUs">
          <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
            <motion.div variants={mainVariants}>
              <h2>Free Consultation</h2>
              <h3>Or just have a question?</h3>
            </motion.div>
          </motion.section>

            
            <Grow in>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half formData={formData}/>
                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half formData={formData}/>
                  </>
                  <Input name="companyName" label="Company Name" handleChange={handleChange} type="text" autoFocus formData={formData}/>
                  <Input name="email" label="Email" handleChange={handleChange} type="email" autoFocus formData={formData}/>
                  <Input name="phone" label="Phone Number" handleChange={handleChange} type="text" autoFocus formData={formData}/>

                  <Grid item xs={12} >
                    <TextField name='message' variant='outlined' label="Message" fullWidth 
                    margin="dense"
                    value={formData.message}
                    multiline rows={4} required
                    onChange={handleChange} />
                    <FormControlLabel control={<Checkbox defaultChecked onChange={handleChange}/>} label="Subscribe to our newsletter" />

                  </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{mt:2, mb:1}}>Submit</Button>

                <Modal open={isOpen} onClose={handleClose} >
                    <Box sx={{ ...style, width: 400 }}>
                        <h1 id="modal-title">Submitted</h1>
                        <p id="modal-description">
                          Your wish is our command🗼 We will get back to you as soon as possible.
                        </p>
                    </Box>
                  </Modal>
              </form>
            </Grow>
        </div>
    )
}
