import React from 'react';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import ProblemFraming from './components/ProblemFraming';
import SolutionFraming from './components/SolutionFraming';
import SolutionDetails from './components/SolutionDetails';
import Video from './components/Video';
import OutcomeFraming from './components/OutcomeFraming';
import Credibility from './components/Credibility';
import Alternatives from './components/Alternatives';
import About from './components/About';
import FAQ from './components/FAQ';
import MoreTestimonials from './components/MoreTestimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Header />
          <Hero />
          <Testimonials />
          <ProblemFraming />
          <SolutionFraming />
          <SolutionDetails />
          <Video />
          <OutcomeFraming />
          <Credibility />
          <Alternatives />
          <About />
          <FAQ />
          <MoreTestimonials />
          <CallToAction />
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
