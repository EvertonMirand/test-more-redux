import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, ListItem } from './styles';
import { removeList } from '~/store/modules/list/actions';

export default function List() {
  const list = useSelector(state => state.list.list);
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        {list.map((l, index) => (
          <ListItem
            key={`${l.name}.${index}`}
            onClick={() => {
              dispatch(removeList(index));
            }}
          >
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
