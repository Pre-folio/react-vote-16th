import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import { Container } from '../components/elements/Wrapper';
import { DemoDayVoteTitleBack } from '../components/Icons/Title/DemoDayVoteTitleBack';
import { DemoDayVoteTitleFront } from '../components/Icons/Title/DemoDayVoteTitleFront';
/* 파트가 front인지 back인지 상태관리 통해 골라쓰기 */

import { BLACK_1 } from '../styles/theme';
import { LeaderNameButton } from '../components/Icons/LeaderNameButton';

export function DemoDayVote() {
  return (
    <Container>
      <Header />
      <Section>
        <DemoDayVoteTitleFront />
      </Section>
    </Container>
  );
}

const Section = styled.section`
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
