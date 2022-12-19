import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/elements/Header';
import axios from 'axios';
import { useEffect } from 'react';
import { Title } from '../components/Icons/Title';
import styled from 'styled-components';

export function DemoDayResult() {
  const getRes = async () => {
    await axios.get('http://prefoliovote.ml/vote/result/demo/').then((res) => console.log(res));
  };
  console.log(getRes());

  return (
    <div>
      <Header />
      <Wrapper>
        <Title />
      </Wrapper>
      {/* <Outlet /> */}
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
