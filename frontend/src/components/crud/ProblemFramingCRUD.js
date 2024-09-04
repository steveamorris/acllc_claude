import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';

const ProblemFramingCRUD = () => {
  const [problemFramings, setProblemFramings] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchProblemFramings();
  }, []);

  const fetchProblemFramings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/problem-framing');
      setProblemFramings(response.data);
    } catch (error) {
      console.error('Error fetching problem framings:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/problem-framing/${editingId}`, { title, description });
      } else {
        await axios.post('http://localhost:5000/api/problem-framing', { title, description });
      }
      fetchProblemFramings();
      setTitle('');
      setDescription('');
      setEditingId(null);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error submitting problem framing:', error);
    }
  };

  const handleEdit = (problemFraming) => {
    setTitle(problemFraming.title);
    setDescription(problemFraming.description);
    setEditingId(problemFraming.id);
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/problem-framing/${id}`);
      fetchProblemFramings();
    } catch (error) {
      console.error('Error deleting problem framing:', error);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setTitle('');
    setDescription('');
    setEditingId(null);
  };

  return (
    <div>
      <h2>Problem Framings</h2>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Add Problem Framing
      </Button>
      <List>
        {problemFramings.map((problemFraming) => (
          <ListItem key={problemFraming.id}>
            <ListItemText
              primary={problemFraming.title}
              secondary={problemFraming.description}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(problemFraming)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(problemFraming.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editingId ? 'Edit Problem Framing' : 'Add Problem Framing'}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              multiline
              rows={4}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {editingId ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProblemFramingCRUD;