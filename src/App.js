import React from 'react';
import Chat from './components/Chat';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Chat />
      </Container>
    </div>
  );
}

export default App;
