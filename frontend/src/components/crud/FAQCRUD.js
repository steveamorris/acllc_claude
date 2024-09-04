import React from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

class FAQCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [],
      question: '',
      answer: '',
      editingId: null
    };
  }

  componentDidMount() {
    this.fetchFaqs();
  }

  fetchFaqs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/faqs');
      const data = await response.json();
      this.setState({ faqs: data });
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { question, answer, editingId } = this.state;
    try {
      if (editingId) {
        // Update existing FAQ
        await fetch(`http://localhost:5000/api/faqs/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question, answer }),
        });
      } else {
        // Create new FAQ
        await fetch('http://localhost:5000/api/faqs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question, answer }),
        });
      }
      this.setState({ question: '', answer: '', editingId: null });
      this.fetchFaqs();
    } catch (error) {
      console.error('Error submitting FAQ:', error);
    }
  };

  handleEdit = (faq) => {
    this.setState({
      question: faq.question,
      answer: faq.answer,
      editingId: faq.id
    });
  };

  handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/faqs/${id}`, { method: 'DELETE' });
      this.fetchFaqs();
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  render() {
    const { faqs, question, answer, editingId } = this.state;
    return (
      <div>
        <Typography variant="h4" gutterBottom>FAQs</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Question"
            value={question}
            onChange={(e) => this.setState({ question: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Answer"
            value={answer}
            onChange={(e) => this.setState({ answer: e.target.value })}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            {editingId ? 'Update' : 'Create'} FAQ
          </Button>
        </form>
        <List>
          {faqs.map((faq) => (
            <ListItem key={faq.id}>
              <ListItemText primary={faq.question} secondary={faq.answer} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => this.handleEdit(faq)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(faq.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default FAQCRUD;