import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import { BLACK_1 } from '../styles/theme';
import { Content1 } from '../components/Icons/Content_1';
import { Content2 } from '../components/Icons/Content_2';
import { Content3 } from '../components/Icons/Content_3';
import { Content4 } from '../components/Icons/Content_4';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const onClickContentButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    let content = e.currentTarget.name;
    switch (content) {
      case 'part-leader-vote':
        navigate('vote/part-leader');
        return;
      case 'part-leader-result':
        navigate('result/part-leader');
        return;
      case 'demo-day-vote':
        navigate('vote/demo-day');
        return;
      case 'demo-day-result':
        navigate('result/demo-day');
        return;
      default:
        return;
    }
  };
  return (
    <Container>
      <Header />
      <Section>
        <div className="main-1">Vote for...</div>
        <ContentWrapper>
          <Content1 onClick={onClickContentButton} />
          <Content2 onClick={onClickContentButton} />
          <Content3 onClick={onClickContentButton} />
          <Content4 onClick={onClickContentButton} />
        </ContentWrapper>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  color: ${BLACK_1};

  & .main-1 {
    font-size: 72px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-top: 20px;
  grid-template-columns: 250px 250px;
  grid-template-rows: 250px 250px;
`;
