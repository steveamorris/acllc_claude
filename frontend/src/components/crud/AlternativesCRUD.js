import React from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { API_BASE_URL } from '../../config';

class AlternativesCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alternatives: [],
      title: '',
      description: '',
      editingId: null
    };
  }

  componentDidMount() {
    this.fetchAlternatives();
  }

  fetchAlternatives = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/alternatives`);
      const data = await response.json();
      this.setState({ alternatives: data });
    } catch (error) {
      console.error('Error fetching alternatives:', error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, editingId } = this.state;
    try {
      if (editingId) {
        // Update existing alternative
        await fetch(`${API_BASE_URL}/api/alternatives/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description }),
        });
      } else {
        // Create new alternative
        await fetch(`${API_BASE_URL}/api/alternatives`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description }),
        });
      }
      this.setState({ title: '', description: '', editingId: null });
      this.fetchAlternatives();
    } catch (error) {
      console.error('Error submitting alternative:', error);
    }
  };

  handleEdit = (alternative) => {
    this.setState({
      title: alternative.title,
      description: alternative.description,
      editingId: alternative.id
    });
  };

  handleDelete = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/api/alternatives/${id}`, { method: 'DELETE' });
      this.fetchAlternatives();
    } catch (error) {
      console.error('Error deleting alternative:', error);
    }
  };

  render() {
    const { alternatives, title, description, editingId } = this.state;
    return (
      <div>
        <Typography variant="h4" gutterBottom>Alternatives</Typography>
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
            {editingId ? 'Update' : 'Create'} Alternative
          </Button>
        </form>
        <List>
          {alternatives.map((alternative) => (
            <ListItem key={alternative.id}>
              <ListItemText primary={alternative.title} secondary={alternative.description} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => this.handleEdit(alternative)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(alternative.id)}>
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

export default AlternativesCRUD;