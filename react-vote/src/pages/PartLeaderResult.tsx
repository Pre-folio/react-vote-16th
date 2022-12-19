import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import axios from 'axios';
import { Title } from '../components/Icons/Title';
import styled from 'styled-components';

export function PartLeaderResult() {
  const getRes = async () => {
    await axios.get('http://prefoliovote.ml/vote/result/demo/').then((res) => console.log(res));
  };
  console.log(getRes());

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
