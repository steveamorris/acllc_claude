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

const CustomerTypesCRUD = () => {
  const [customerTypes, setCustomerTypes] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentCustomerType, setCurrentCustomerType] = useState({ type_name: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchCustomerTypes();
  }, []);

  const fetchCustomerTypes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/customer-types`);
      setCustomerTypes(response.data);
    } catch (error) {
      console.error('Error fetching customer types:', error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setIsEditing(false);
    setCurrentCustomerType({ type_name: '', description: '' });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCustomerType({ ...currentCustomerType, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (isEditing) {
        await axios.put(`${API_BASE_URL}/api/customer-types/${currentCustomerType.customerType_id}`, currentCustomerType);
      } else {
        await axios.post(`${API_BASE_URL}/api/customer-types`, currentCustomerType);
      }
      fetchCustomerTypes();
      handleClose();
    } catch (error) {
      console.error('Error saving customer type:', error);
    }
  };

  const handleEdit = (customerType) => {
    setCurrentCustomerType(customerType);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this customer type?')) {
      try {
        await axios.delete(`${API_BASE_URL}/api/customer-types/${id}`);
        fetchCustomerTypes();
      } catch (error) {
        console.error('Error deleting customer type:', error);
      }
    }
  };

  return (
    <div>
      <h2>Customer Types</h2>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New Customer Type
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
            {customerTypes.map((customerType) => (
              <TableRow key={customerType.customerType_id}>
                <TableCell>{customerType.type_name}</TableCell>
                <TableCell>{customerType.description}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(customerType)}>Edit</Button>
                  <Button onClick={() => handleDelete(customerType.customerType_id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Customer Type' : 'Add New Customer Type'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="type_name"
            label="Type Name"
            type="text"
            fullWidth
            value={currentCustomerType.type_name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={currentCustomerType.description}
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

export default CustomerTypesCRUD;