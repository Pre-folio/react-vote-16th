import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import axios from 'axios';
import { DemoDayResultTitle } from '../components/Icons/Title/DemoDayResult';
import styled from 'styled-components';
import { Rank } from '../components/elements/DemoDayResult/Rank';
import { getDemoDayResult } from '../api/getResult';
import { Container } from '../components/elements/Wrapper';

export function DemoDayResult() {
  // const getRes = async () => {
  //   await axios.get('http://prefoliovote.ml/vote/result/demo/').then((res) => console.log(res));
  // };
  // console.log(getRes());\
  const { isLoading, data } = useQuery(['demo-day-result'], async () => {
    const result = await getDemoDayResult();
    console.log(result.data);
  });
  console.log(isLoading, data);

  return (
    <Container>
      <Header />
      <Wrapper>
        <DemoDayResultTitle />
        <Rank teamName="주효정" rank={8} style={{ marginTop: '40px' }} />
        <Rank teamName="주효정" rank={8} />
        <Rank teamName="주효정" rank={8} />
        <Rank teamName="주효정" rank={8} />
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  gap: 12px;
`;

const TeamListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
