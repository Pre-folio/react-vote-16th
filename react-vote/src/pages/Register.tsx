import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import RegisterList from '../components/elements/RegisterList';

export function Register() {
  return (
    <Container>
      <Header />
      <RegisterList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;
