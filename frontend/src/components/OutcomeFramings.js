import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const OutcomeFramings = () => {
  const [outcomeFramings, setOutcomeFramings] = useState([]);

  useEffect(() => {
    fetchOutcomeFramings();
  }, []);

  const fetchOutcomeFramings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/outcomeframings');
      const data = await response.json();
      setOutcomeFramings(data);
    } catch (error) {
      console.error('Error fetching Outcome Framings:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Outcome Framings</Typography>
      <Grid container spacing={3}>
        {outcomeFramings.map((framing) => (
          <Grid item xs={12} sm={6} md={4} key={framing.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>{framing.title}</Typography>
                <Typography variant="body2">{framing.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OutcomeFramings;