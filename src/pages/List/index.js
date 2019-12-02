import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, ListItem } from './styles';

export default function List() {
  const list = useSelector(state => state.list.list);

  return (
    <Container>
      <div>
        {list.map(l => (
          <ListItem>
            <span>Nome: {l.name}</span>
            <span>Algo: {l.algo}</span>
            <span>Telefone: {l.telefone}</span>
          </ListItem>
        ))}
        <Link to="/">Adicionar lista</Link>
      </div>
    </Container>
  );
}
