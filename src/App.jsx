import { useState  } from 'react';
import { Route, Routes } from "react-router-dom";
import { Cross as Hamburger } from 'hamburger-react';
// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IconButton, Link, Paper, Stack, SvgIcon, SwipeableDrawer, Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// Components
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Services from "./Pages/Services/Services.jsx";
import OurWork from "./Pages/OurWork/OurWork.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Careers from "./Pages/Careers/Careers.jsx";
// style sheet
import './App.scss'
import ScrollToTop from './Pages/components/ToTop.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D80A93'
    },

    secondary: {
      main: '#FDF9F5'
    }
  },
  typography: {
    fontFamily : [
      'Montserrat',
      'sans-serif',
    ].join(','),
  }
});

function LineIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13.78,9.46h0a.38.38,0,0,0-.38.38v1.67L12,9.65a.4.4,0,0,0-.33-.19h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h0a.38.38,0,0,0,.38-.38V11l1.39,1.91,0,0h0a.27.27,0,0,0,.15.11.32.32,0,0,0,.14,0h0A.33.33,0,0,0,14,13l.1-.07h0a.39.39,0,0,0,.11-.27V9.84A.38.38,0,0,0,13.78,9.46ZM9.2,12.27H8.14V9.84a.38.38,0,0,0-.38-.38h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38H9.2a.39.39,0,0,0,.39-.38v0A.39.39,0,0,0,9.2,12.27Zm1.11-2.81h0a.39.39,0,0,0-.39.38v2.84a.39.39,0,0,0,.39.38h0a.38.38,0,0,0,.38-.38V9.84A.38.38,0,0,0,10.31,9.46ZM17.91,2H6.09A4.1,4.1,0,0,0,2,6.09V17.91A4.1,4.1,0,0,0,6.09,22H17.91A4.1,4.1,0,0,0,22,17.91V6.09A4.1,4.1,0,0,0,17.91,2Zm.31,12.28a1.55,1.55,0,0,1-.13.17h0a5.5,5.5,0,0,1-.8.8c-2,1.87-5.36,4.11-5.81,3.76s.64-1.76-.53-2a1,1,0,0,1-.25,0h0c-3.44-.48-6-2.89-6-5.78,0-3.25,3.29-5.88,7.34-5.88s7.34,2.63,7.34,5.88A5,5,0,0,1,18.22,14.28ZM16.51,9.47H15a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h1.48a.38.38,0,0,0,.38-.38v0a.38.38,0,0,0-.38-.38H15.45v-.6h1.06a.39.39,0,0,0,.38-.39v0a.38.38,0,0,0-.38-.38H15.45v-.61h1.06a.38.38,0,0,0,.38-.38v0A.38.38,0,0,0,16.51,9.47Z"/>
    </SvgIcon>
  );
}


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pagesPath = ['aboutUs', 'services', 'ourWork', 'contactUs', 'careers']
  const pagesName = ['About Us', 'Services', 'Our Work', 'Contact Us', 'Careers']

  const toggleDrawer = (state) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsMenuOpen(state);
  };

  const menuStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10vh',
    padding: '0 1em',
    width: '100vw'
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App" >
      <ScrollToTop />
        <nav>
          <Link href="/" underline="hover" className="logo">
            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'}  alt="logo" id="logo" />
          </Link>
          
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} rounded color='#D80A93'/>

          <SwipeableDrawer anchor='top' open={isMenuOpen} className="dropdown-menu"
                           onClose={toggleDrawer(false)}
                           onOpen={toggleDrawer(true)} >   
            <Paper sx={menuStyle} className="drop-menu">
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width: '100vw'}}>
                {pagesPath.map((page, i) => (
                  <Link href={page} key={page} underline="hover" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        sx={{marginRight: '1rem'}}>{pagesName[i]}</Link>
                ))}
                <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} rounded color='#D80A93'/>
              </Stack>
            </Paper>   
  
          </SwipeableDrawer>

        </nav>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourWork" element={<OurWork />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>

        <Stack direction="row" alignItems="center" justifyContent="space-between"
               style={{ backgroundColor: '#fdf9f5', padding: '4em 1em 2em 1em' }}
               className="footer">
          <Link href="/" underline="hover" className="logo">
            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'}  alt="logo" id="footerLogo" />
          </Link>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Link href="#" underline="hover">Imprint</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" underline="hover">Press</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" underline="hover">Values</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" underline="hover">Terms & Conditions</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="/contactUs" underline="hover">Contact</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="/contactUs" underline="hover">Blog</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="/ourWork" underline="hover">Our Work</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="/careers" underline="hover">Careers</Link>
            </Grid>
          </Grid>

          <Stack direction="row" alignItems="center" spacing={2} className="socials-wrapper">
            <IconButton color="primary" aria-label="twitter" component="span">
            <a href="https://www.canva.com/design/DAFDbHncX8g/wZFBhNZWUwE8ui5bHBPOqw/watch?utm_content=DAFDbHncX8g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" rel="noreferrer" target="_blank">
              <TwitterIcon />
            </a>
            </IconButton>

            <IconButton color="primary" aria-label="facebook" component="span">
              <a href="https://www.canva.com/design/DAFDbgZLH0E/dy_1oWYZdoQE7pmUwvsuOQ/view?utm_content=DAFDbgZLH0E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" rel="noreferrer" target="_blank"><FacebookIcon /></a>   
            </IconButton>

            <IconButton color="primary" aria-label="instagram" component="span">
              <a href="https://www.canva.com/design/DAFDbi62Ylc/1Z4AK3c2mdTh0zRFl4faGA/view?utm_content=DAFDbi62Ylc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" rel="noreferrer" target="_blank">
                <InstagramIcon />
              </a>
            </IconButton>
            
            <IconButton color="primary" aria-label="line" component="span">
              <LineIcon color="primary"/>
            </IconButton>
          </Stack>
          <Link href="#" underline="hover" id="impressum">Impressum</Link>
      </Stack>
    </div>
    </ThemeProvider>
  )
}

export default App;
