import React, { useState } from 'react';
import MistralClient from '@mistralai/mistralai';
import { Container, TextField, Button, Typography, Box, Paper, CircularProgress } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const apiKey = process.env.REACT_APP_MISTRAL_API_KEY;
  const client = new MistralClient(apiKey);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newMessage = { role: 'user', content: message };
    const updatedHistory = [...history, newMessage];

    const chatResponse = await client.chat({
      model: 'mistral-large-latest',
      messages: updatedHistory,
    });

    const newResponse = { role: 'assistant', content: chatResponse.choices[0].message.content };
    setHistory([...updatedHistory, newResponse]);
    setResponse(chatResponse.choices[0].message.content);
    setMessage('');
    setLoading(false);
  };

  const formatResponse = (text) => {
    const codeRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeRegex.exec(text)) !== null) {
      const [fullMatch, lang, code] = match;
      const index = match.index;

      if (index > lastIndex) {
        parts.push(
          <Typography variant="body1" component="div" style={{ whiteSpace: 'pre-wrap' }} key={lastIndex}>
            {text.substring(lastIndex, index)}
          </Typography>
        );
      }

      parts.push(
        <Box component="div" key={index} my={2}>
          <Typography variant="subtitle2">{lang}</Typography>
          <SyntaxHighlighter language={lang} style={darcula} showLineNumbers>
            {code}
          </SyntaxHighlighter>
        </Box>
      );

      lastIndex = index + fullMatch.length;
    }

    if (lastIndex < text.length) {
      parts.push(
        <Typography variant="body1" component="div" style={{ whiteSpace: 'pre-wrap' }} key={lastIndex}>
          {text.substring(lastIndex)}
        </Typography>
      );
    }

    return <div>{parts}</div>;
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Chat with Mistral
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Type your message"
              variant="outlined"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Send
            </Button>
          </form>
          {loading && (
            <Box display="flex" justifyContent="center" my={3}>
              <CircularProgress />
            </Box>
          )}
          <Box mt={3}>
            {history.map((msg, index) => (
              <Box key={index} mb={2}>
                <Typography variant="subtitle1" color={msg.role === 'user' ? 'primary' : 'secondary'}>
                  {msg.role === 'user' ? 'You' : 'Assistant'}:
                </Typography>
                {formatResponse(msg.content)}
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Chat;
