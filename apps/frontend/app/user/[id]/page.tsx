"use client";

import * as React from 'react';
import { useEffect, useState } from 'react';
import { CircularProgress, Container, Typography } from '@mui/material';
import { getUserById } from '../../../apis/userApi'; 
import { User } from '@/apis/user';
import { useParams } from 'next/navigation';

const UserDetail = () => {
    const params = useParams(); 
    const { id } = params;
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log(22232,params)
        const data = await getUserById(id as string); 
        if (data.id) {
            setUser(data);
        }
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
            {!user && 
                <Typography variant="h2" component="h2" gutterBottom>
                    User not found
                </Typography>
            }
            {user && 
                <>
                    <Typography variant="h2" component="h2" gutterBottom>
                        {user.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Age: {user.age}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Email: {user.email}
                    </Typography>
                </>
            }
        </Container>
      );
};

export default UserDetail;