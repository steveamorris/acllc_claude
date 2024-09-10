import React from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, FormControlLabel, Checkbox, Rating, Snackbar, CircularProgress } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { API_BASE_URL } from '../../config';

class TestimonialsCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [],
      client_name: '',
      client_company: '',
      testimonial_text: '',
      rating: 0,
      date_given: '',
      featured: false,
      editingId: null,
      loading: false,
      snackbar: {
        open: false,
        message: '',
        severity: 'info'
      }
    };
  }

  componentDidMount() {
    this.fetchTestimonials();
  }

  fetchTestimonials = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(`${API_BASE_URL}/api/testimonials`);
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      const data = await response.json();
      this.setState({ testimonials: data, loading: false });
    } catch (error) {
      console.error('Error fetching Testimonials:', error);
      this.showSnackbar('Failed to fetch testimonials', 'error');
      this.setState({ loading: false });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { client_name, client_company, testimonial_text, rating, date_given, featured, editingId } = this.state;

    if (!this.validateForm()) {
      return;
    }

    const testimonialData = {
      client_name,
      client_company,
      testimonial_text,
      rating,
      date_given,
      featured
    };

    try {
      let response;
      if (editingId) {
        response = await fetch(`${API_BASE_URL}/api/testimonials/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testimonialData),
        });
      } else {
        response = await fetch(`${API_BASE_URL}/api/testimonials`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testimonialData),
        });
      }

      if (!response.ok) {
        throw new Error('Failed to submit testimonial');
      }

      this.resetForm();
      this.fetchTestimonials();
      this.showSnackbar(editingId ? 'Testimonial updated successfully' : 'Testimonial created successfully', 'success');
    } catch (error) {
      console.error('Error submitting Testimonial:', error);
      this.showSnackbar('Failed to submit testimonial', 'error');
    }
  };

  validateForm = () => {
    const { client_name, testimonial_text, rating, date_given } = this.state;
    if (!client_name.trim()) {
      this.showSnackbar('Client name is required', 'error');
      return false;
    }
    if (!testimonial_text.trim()) {
      this.showSnackbar('Testimonial text is required', 'error');
      return false;
    }
    if (rating === 0) {
      this.showSnackbar('Please provide a rating', 'error');
      return false;
    }
    if (!date_given) {
      this.showSnackbar('Please provide a date', 'error');
      return false;
    }
    return true;
  };

  resetForm = () => {
    this.setState({
      client_name: '',
      client_company: '',
      testimonial_text: '',
      rating: 0,
      date_given: '',
      featured: false,
      editingId: null
    });
  };

  handleEdit = (testimonial) => {
    this.setState({
      client_name: testimonial.client_name,
      client_company: testimonial.client_company,
      testimonial_text: testimonial.testimonial_text,
      rating: testimonial.rating,
      date_given: testimonial.date_given ? testimonial.date_given.split('T')[0] : '',
      featured: testimonial.featured,
      editingId: testimonial.id
    });
  };

  handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/testimonials/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to delete testimonial');
      }
      this.fetchTestimonials();
      this.showSnackbar('Testimonial deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting Testimonial:', error);
      this.showSnackbar('Failed to delete testimonial', 'error');
    }
  };

  showSnackbar = (message, severity) => {
    this.setState({
      snackbar: {
        open: true,
        message,
        severity
      }
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        open: false
      }
    });
  };

  render() {
    const { testimonials, client_name, client_company, testimonial_text, rating, date_given, featured, editingId, loading, snackbar } = this.state;
    return (
      <div>
        <Typography variant="h4" gutterBottom>Testimonials</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Client Name"
            value={client_name}
            onChange={(e) => this.setState({ client_name: e.target.value })}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Client Company"
            value={client_company}
            onChange={(e) => this.setState({ client_company: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Testimonial Text"
            value={testimonial_text}
            onChange={(e) => this.setState({ testimonial_text: e.target.value })}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Typography component="legend">Rating</Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              this.setState({ rating: newValue });
            }}
            required
          />
          <TextField
            label="Date Given"
            type="date"
            value={date_given}
            onChange={(e) => this.setState({ date_given: e.target.value })}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={featured}
                onChange={(e) => this.setState({ featured: e.target.checked })}
                name="featured"
                color="primary"
              />
            }
            label="Featured"
          />
          <Button type="submit" variant="contained" color="primary">
            {editingId ? 'Update' : 'Create'} Testimonial
          </Button>
        </form>
        {loading ? (
          <CircularProgress />
        ) : (
          <List>
            {testimonials.map((testimonial) => (
              <ListItem key={testimonial.id}>
                <ListItemText 
                  primary={`${testimonial.client_name} - ${testimonial.client_company}`} 
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        {testimonial.testimonial_text}
                      </Typography>
                      <br />
                      <Rating name="read-only" value={testimonial.rating} readOnly />
                      <br />
                      Date: {testimonial.date_given ? new Date(testimonial.date_given).toLocaleDateString() : 'N/A'} | Featured: {testimonial.featured ? 'Yes' : 'No'}
                    </>
                  } 
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit" onClick={() => this.handleEdit(testimonial)}>
                    <Edit />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(testimonial.id)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
          message={snackbar.message}
          severity={snackbar.severity}
        />
      </div>
    );
  }
}

export default TestimonialsCRUD;