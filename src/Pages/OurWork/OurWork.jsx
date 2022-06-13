import { motion } from 'framer-motion'
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Paper, Grid, Button, Card, CardContent, CardMedia, Typography, Stack } from '@mui/material'
import { CardActionArea } from '@mui/material';
import './OurWork.scss'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#D80A93' : '#FDF9F5',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  fontSize: '1.4em',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function OurWork() {
  const industries = [
    "Fashion", "Pharma", "Finance", "Automobile", "Retail", "Media", "Lifestyle",
    "Startup's", "Education", "Construction", "Technology", "Logistics", "Energy", "Investment", "Media"
  ]
    const bottomVariants = {
      offscreen: {
        y: 2000
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
  return (
    <div className="OurWork">
      <motion.div className="main"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <h1>We do quality work</h1>
        <p>Creativity is limitless. We give them <span className="key-words">"Wings"</span></p>
      </motion.div>

      <motion.div className="office-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.65}}>
         <img src={process.env.PUBLIC_URL + '/assets/images/our_office.jpg'} alt="Ashley Jiang" />
      </motion.div>

      <motion.section className="industries-wrapper"
      initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
            <motion.div variants={bottomVariants}>
              <h2>Industries We Serve</h2>
              <p>Just a few of the many we serve</p>

              <Box sx={{ flexGrow: 1 }} className="industries-list-wrapper">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} xs={{ margin: '0 3em'}}>
                  {industries.map( industry => (
                    <Grid item xs={2} sm={4} md={4} key={industry}>
                      <Item>{industry}</Item>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
      </motion.section>

      <motion.div className="main"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <h1>Work We Have Done</h1>

        <motion.section className="work-img-wrapper" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
          <motion.div variants={leftVariants} >
              <img src={process.env.PUBLIC_URL + '/assets/images/social_media_campaign.jpg'} alt="media campaign" />
          </motion.div>
          <motion.div variants={rightVariants} >
              <img src={process.env.PUBLIC_URL + '/assets/images/elearning_platform.jpg'} alt="platform" />
          </motion.div>
        </motion.section>

        <Button variant="contained" color="secondary" size="large" sx={{marginTop : '2rem'}}>View All</Button>
      </motion.div>

      <motion.section className="testimonials-wrapper"
      initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} >
            <motion.div variants={bottomVariants}>
              <h2>Testimonials</h2>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={process.env.PUBLIC_URL + '/assets/images/Kenn.jpg'}
                      alt="Kenneth Shinabery"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Kenneth Shinabery
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      As a satisfied customer I would like to thank Hyōgen for their hard work and dedication. Thank you for creating a brand that has been able to grow and expand within the changing times. You have helped us reach new customers and I am grateful for that...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={process.env.PUBLIC_URL + '/assets/images/Monishka.jpg'}
                      alt="Monishka Gohil"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Monishka Gohil
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      They just used 3 steps to make us grow exponentially on the web in just 3 weeks! I am the CEO of Lizard Inc. We are a big brand, selling electronics. For 2 years now we decided to go online but unfortunately it was the Covid-pandemic and we struggled seriously. Then we heard about Hyōgen and used their services...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={process.env.PUBLIC_URL + '/assets/images/Kathya.jpg'}
                      alt="Kathya Viehöfer"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Kathya Viehöfer 
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      After 2 years on the internet we realized that our sales decreased drastically. We clearly needed help from professionals and discovered Hyōgen through Ads on Social Media. We are so happy and satisfied with their team and their work, that we ́ll definitely recommend you warmly to every other company...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </motion.div>
      </motion.section>


    </div>
  );
}
