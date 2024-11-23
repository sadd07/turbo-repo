import * as React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Container>
        <Typography variant="h1" component="h2" gutterBottom>
          Welcome to My App
        </Typography>
        <Button variant="contained" color="primary">
          <Link href="/user/list" passHref> 
            <Typography style={{ color: 'inherit', textDecoration: 'none' }}>User List</Typography>
          </Link>
        </Button>
        <Button style={{ marginLeft: '16px'}} variant="contained" color="primary">
          <Link href="/user/create" passHref> 
            <Typography style={{ color: 'inherit', textDecoration: 'none' }}>Create User</Typography>
          </Link>
        </Button> 
      </Container>
    </>
  );
}
