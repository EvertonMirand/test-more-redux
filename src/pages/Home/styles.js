import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #658;
  padding: 10px;
  overflow: auto;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    height: 100%;

    input,
    button {
      margin-top: 10px;
      width: 60%;
      height: 30px;
      border-radius: 4px;
      border: none;
    }

    input {
      background: #f76010;
      padding-left: 10px;
      margin-right: 10px;
      border-bottom: 1.2px solid #000;

      ::placeholder {
        color: #fff;
      }
    }

    button {
      background: #156;
    }
  }
`;
