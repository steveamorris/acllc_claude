import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';

const SolutionDetailsCRUD = () => {
  const [solutionDetails, setSolutionDetails] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchSolutionDetails();
  }, []);

  const fetchSolutionDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/solution-details');
      setSolutionDetails(response.data);
    } catch (error) {
      console.error('Error fetching solution details:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/solution-details/${editingId}`, { title, description });
      } else {
        await axios.post('http://localhost:5000/api/solution-details', { title, description });
      }
      fetchSolutionDetails();
      setTitle('');
      setDescription('');
      setEditingId(null);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error submitting solution detail:', error);
    }
  };

  const handleEdit = (solutionDetail) => {
    setTitle(solutionDetail.title);
    setDescription(solutionDetail.description);
    setEditingId(solutionDetail.id);
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/solution-details/${id}`);
      fetchSolutionDetails();
    } catch (error) {
      console.error('Error deleting solution detail:', error);
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
      <h2>Solution Details</h2>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Add Solution Detail
      </Button>
      <List>
        {solutionDetails.map((solutionDetail) => (
          <ListItem key={solutionDetail.id}>
            <ListItemText
              primary={solutionDetail.title}
              secondary={solutionDetail.description}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(solutionDetail)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(solutionDetail.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editingId ? 'Edit Solution Detail' : 'Add Solution Detail'}</DialogTitle>
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

export default SolutionDetailsCRUD;