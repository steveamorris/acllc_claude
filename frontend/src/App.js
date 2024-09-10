import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Tabs, Tab, Box, Container, Grid, Paper } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import ProblemFraming from './components/ProblemFraming';
import SolutionFraming from './components/SolutionFraming';
import SolutionDetails from './components/SolutionDetails';
import Video from './components/Video';
import OutcomeFraming from './components/OutcomeFramings';
import Credibility from './components/Credibility';
import Alternatives from './components/Alternatives';
import About from './components/About';
import FAQ from './components/FAQ';
import MoreTestimonials from './components/MoreTestimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Import CRUD components
import AlternativesCRUD from './components/crud/AlternativesCRUD';
import OutcomeFramingsCRUD from './components/crud/OutcomeFramingsCRUD';
import FAQCRUD from './components/crud/FAQCRUD';
import CustomerTypesCRUD from './components/crud/CustomerTypesCRUD';
import ServiceTypesCRUD from './components/crud/ServiceTypesCRUD';
import SolutionDetailsCRUD from './components/crud/SolutionDetailsCRUD';
import ProblemFramingCRUD from './components/crud/ProblemFramingCRUD';
import TestimonialsCRUD from './components/crud/TestimonialsCRUD';

const App = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Header />
        <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
            <Paper elevation={2}>
              <Tabs value={tabValue} onChange={handleTabChange} centered variant="fullWidth">
                <Tab label="Main Content" />
                <Tab label="Alternatives CRUD" />
                <Tab label="Outcome Framings CRUD" />
                <Tab label="FAQ CRUD" />
                <Tab label="Customer Types CRUD" />
                <Tab label="Service Types CRUD" />
                <Tab label="Solution Details CRUD" />
                <Tab label="Problem Framing CRUD" />
                <Tab label="Testimonials CRUD" />
              </Tabs>
            </Paper>
          </Box>
          {tabValue === 0 && (
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Paper elevation={3}>
                  <Hero />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2}>
                  <ProblemFraming />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2}>
                  <Testimonials />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={2}>
                  <SolutionFraming />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <SolutionDetails />
              </Grid>
              <Grid item xs={12}>
                <Video />
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={2}>
                  <OutcomeFraming />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Credibility />
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={2}>
                  <Alternatives />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <About />
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={2}>
                  <FAQ />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <MoreTestimonials />
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3}>
                  <CallToAction />
                </Paper>
              </Grid>
            </Grid>
          )}
          {tabValue === 1 && <AlternativesCRUD />}
          {tabValue === 2 && <OutcomeFramingsCRUD />}
          {tabValue === 3 && <FAQCRUD />}
          {tabValue === 4 && <CustomerTypesCRUD />}
          {tabValue === 5 && <ServiceTypesCRUD />}
          {tabValue === 6 && <SolutionDetailsCRUD />}
          {tabValue === 7 && <ProblemFramingCRUD />}
          {tabValue === 8 && <TestimonialsCRUD />}
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
