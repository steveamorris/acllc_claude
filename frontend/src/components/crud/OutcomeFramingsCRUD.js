import React from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { API_BASE_URL } from '../../config';

class OutcomeFramingsCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outcomeFramings: [],
      title: '',
      description: '',
      editingId: null
    };
  }

  componentDidMount() {
    this.fetchOutcomeFramings();
  }

  fetchOutcomeFramings = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/outcomeframings`);
      const data = await response.json();
      this.setState({ outcomeFramings: data });
    } catch (error) {
      console.error('Error fetching outcome framings:', error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, editingId } = this.state;
    try {
      if (editingId) {
        // Update existing outcome framing
        await fetch(`${API_BASE_URL}/api/outcomeframings/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description }),
        });
      } else {
        // Create new outcome framing
        await fetch(`${API_BASE_URL}/api/outcomeframings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description }),
        });
      }
      this.setState({ title: '', description: '', editingId: null });
      this.fetchOutcomeFramings();
    } catch (error) {
      console.error('Error submitting outcome framing:', error);
    }
  };

  handleEdit = (outcomeFraming) => {
    this.setState({
      title: outcomeFraming.title,
      description: outcomeFraming.description,
      editingId: outcomeFraming.id
    });
  };

  handleDelete = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/api/outcomeframings/${id}`, { method: 'DELETE' });
      this.fetchOutcomeFramings();
    } catch (error) {
      console.error('Error deleting outcome framing:', error);
    }
  };

  render() {
    const { outcomeFramings, title, description, editingId } = this.state;
    return (
      <div>
        <Typography variant="h4" gutterBottom>Outcome Framings</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            {editingId ? 'Update' : 'Create'} Outcome Framing
          </Button>
        </form>
        <List>
          {outcomeFramings.map((outcomeFraming) => (
            <ListItem key={outcomeFraming.id}>
              <ListItemText primary={outcomeFraming.title} secondary={outcomeFraming.description} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => this.handleEdit(outcomeFraming)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(outcomeFraming.id)}>
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

export default OutcomeFramingsCRUD;