import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import axios from 'axios';
import styled from 'styled-components';
import { getPartLeaderResult } from '../api/getResult';
import { Container } from '../components/elements/Wrapper';

export function PartLeaderResult() {
  const { isLoading, data } = useQuery(['demo-day-result'], async () => {
    const result = await getPartLeaderResult();
    console.log(result);
  });
  console.log(isLoading, data);

  return (
    <Container>
      <Header />
      <Wrapper>{/* <Title /> */}</Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
`;
