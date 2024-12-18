
import React from 'react';
import {Container} from "@mui/material"
import AccountList from './components/AccountList';

const App = () => {
  return (
    <Container>
      <h1>Bank Account Management</h1>
      <AccountList />
    </Container>
  );
}

export default App;
