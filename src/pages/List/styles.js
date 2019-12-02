import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  background: #658908;
  padding: 10px;
  overflow: auto;
  width: 100%;
  flex-direction: row;

  :link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
