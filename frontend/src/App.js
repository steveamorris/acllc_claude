import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0
    };
  }

  handleTabChange = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };

  render() {
    const { tabValue } = this.state;

    return (
      <div className="app">
        <Header />
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={this.handleTabChange} centered>
            <Tab label="Main Content" />
            <Tab label="Alternatives CRUD" />
            <Tab label="Outcome Framings CRUD" />
            <Tab label="FAQ CRUD" />
          </Tabs>
        </Box>
        {tabValue === 0 && (
          <>
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
          </>
        )}
        {tabValue === 1 && <AlternativesCRUD />}
        {tabValue === 2 && <OutcomeFramingsCRUD />}
        {tabValue === 3 && <FAQCRUD />}
        <Footer />
      </div>
    );
  }
}

export default App;
