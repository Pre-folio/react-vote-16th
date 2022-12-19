import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import axios from 'axios';
import { Title } from '../components/Icons/Title';
import styled from 'styled-components';
import { getPartLeaderResult } from '../api/getResult';

export function PartLeaderResult() {
  const { isLoading, data } = useQuery(['demo-day-result'], async () => {
    const result = await getPartLeaderResult();
    console.log(result);
  });
  console.log(isLoading, data);

  return (
    <div>
      <Header />
      <Wrapper>{/* <Title /> */}</Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
`;
