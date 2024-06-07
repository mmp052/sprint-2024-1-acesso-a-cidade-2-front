
import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sprint-2024-1-acesso-a-cidade-2-front.vercel.app/reset-password', { email });
      setMessage(response.data.mensagem);
    } catch (error) {
      setMessage('Error: ' + error.response.data.mensagem);
    }
  };

  return (
    <div>
      <h2>Redefinição de Senha</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <button type="submit">Mandar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}