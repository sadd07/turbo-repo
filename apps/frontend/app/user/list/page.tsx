"use client";

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Paper, Button } from '@mui/material';
import { getUsers } from '../../../apis/userApi'; 
import { User } from '@/apis/user';
import Link from 'next/link';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(); 
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        User List
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button style={{ marginLeft: '16px'}} variant="contained" color="primary">
                    <Link href={`/user/${user.id}`} passHref> 
                      <Typography style={{ color: 'inherit', textDecoration: 'none' }}>Detail</Typography>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserList;
