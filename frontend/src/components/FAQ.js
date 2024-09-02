import React from 'react';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    { question: 'Everything you need to know before we get started', answer: 'Answer goes here...' },
    { question: 'What are the biggest mistakes they could make that would lead them somewhere else', answer: 'Answer goes here...' },
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>FAQ</Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;