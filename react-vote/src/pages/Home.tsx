import styled from 'styled-components';
import { Header } from '../components/elements/Header';

export function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Section = styled.section`
  margin-top: 30px;
`;
