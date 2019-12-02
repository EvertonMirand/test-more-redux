import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Container } from './styles';
import { saveList } from '~/store/modules/list/actions';

export default function Home() {
  const [nome, setNome] = useState('');
  const [algo, setAlgo] = useState('');
  const [telefone, setTelefone] = useState('');

  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(saveList(nome, algo, telefone));
    setNome('');
    setAlgo('');
    setTelefone('');
  }

  const onChangeText = (event, setValue) => setValue(event.target.value);

  return (
    <Container>
      <form onSubmit={onSubmit} noValidate>
        <input
          type="text"
          value={nome}
          placeholder="Digite o seu nome"
          onChange={e => {
            onChangeText(e, setNome);
          }}
        />
        <input
          placeholder="Digite algo"
          value={algo}
          onChange={e => {
            onChangeText(e, setAlgo);
          }}
        />
        <input
          placeholder="Digite o seu telefone"
          value={telefone}
          onChange={e => {
            onChangeText(e, setTelefone);
          }}
        />

        <button type="submit">Salvar</button>
        <Link to="/list">Visualizar lista</Link>
      </form>
    </Container>
  );
}
