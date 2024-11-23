"use client";

import * as React from 'react';
import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { addUser } from '@/apis/userApi';
import { useRouter } from 'next/navigation';

const CreateUser = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | string>('');
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newUser = {
      id: "",
      name,
      age: Number(age), 
      email,
    };

    try {
      await addUser(newUser);
      alert('User added successfully!');
      setName('');
      setAge('');
      setEmail('');
      router.push('/user/list')
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user');
    }
  };

  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        Create New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default CreateUser;