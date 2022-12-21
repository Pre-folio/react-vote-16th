import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import axios from 'axios';
import styled from 'styled-components';
import { getPartLeaderResult } from '../api/getResult';
import { Container } from '../components/elements/Wrapper';
import { Rank } from '../components/elements/DemoDayResult/Rank';
import ToggleSwitch from '../components/elements/ToggleSwitch';
import { useEffect, useState } from 'react';

export function PartLeaderResult() {
  const [isFrontend, setIsFrontend] = useState(true);
  const { isLoading, data } = useQuery(['part-leader-result'], async () => {
    const result = await getPartLeaderResult();
    console.log(result);
  });
  console.log(isLoading, data);

  const toggleSwitchHandler = () => {
    setIsFrontend(!isFrontend);
    console.log(isFrontend);
  };

  useEffect(() => {
    console.log(isFrontend);
  }, [isFrontend]);

  return (
    <Container>
      <Header />
      <ToggleSwitch isFrontend={isFrontend} setIsFrontend={setIsFrontend} />
      <Wrapper>
        <Rank teamName='주효정' rank={8} />
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; */
`;
