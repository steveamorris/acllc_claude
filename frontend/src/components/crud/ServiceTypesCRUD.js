import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle 
} from '@mui/material';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

const ServiceTypesCRUD = () => {
  const [serviceTypes, setServiceTypes] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentServiceType, setCurrentServiceType] = useState({ type_name: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchServiceTypes();
  }, []);

  const fetchServiceTypes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/service-types`);
      setServiceTypes(response.data);
    } catch (error) {
      console.error('Error fetching service types:', error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setIsEditing(false);
    setCurrentServiceType({ type_name: '', description: '' });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentServiceType({ ...currentServiceType, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (isEditing) {
        await axios.put(`${API_BASE_URL}/api/service-types/${currentServiceType.serviceType_id}`, currentServiceType);
      } else {
        await axios.post(`${API_BASE_URL}/api/service-types`, currentServiceType);
      }
      fetchServiceTypes();
      handleClose();
    } catch (error) {
      console.error('Error saving service type:', error);
    }
  };

  const handleEdit = (serviceType) => {
    setCurrentServiceType(serviceType);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service type?')) {
      try {
        await axios.delete(`${API_BASE_URL}/api/service-types/${id}`);
        fetchServiceTypes();
      } catch (error) {
        console.error('Error deleting service type:', error);
      }
    }
  };

  return (
    <div>
      <h2>Service Types</h2>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New Service Type
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceTypes.map((serviceType) => (
              <TableRow key={serviceType.serviceType_id}>
                <TableCell>{serviceType.type_name}</TableCell>
                <TableCell>{serviceType.description}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(serviceType)}>Edit</Button>
                  <Button onClick={() => handleDelete(serviceType.serviceType_id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Service Type' : 'Add New Service Type'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="type_name"
            label="Type Name"
            type="text"
            fullWidth
            value={currentServiceType.type_name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={currentServiceType.description}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>{isEditing ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ServiceTypesCRUD;