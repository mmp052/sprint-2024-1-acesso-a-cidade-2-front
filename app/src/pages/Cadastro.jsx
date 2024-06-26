import React, { useState } from 'react';
import FormCadastro from '../components/FormCadastro'
import { Container } from '@mui/material';
import Header from '../components/Header';

function Cadastro() {
    return (
        <>
          <Header/>
          <Container maxWidth="sm">
              <FormCadastro />
          </Container>
        </>
    );
}

export default Cadastro;
