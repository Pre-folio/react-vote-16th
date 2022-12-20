import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import { Container } from '../components/elements/Wrapper';
import { PartVoteTitleBack } from '../components/Icons/Title/PartVoteTitleBack';
import { PartVoteTitleFront } from '../components/Icons/Title/PartVoteTitleFront';
/* 파트가 front인지 back인지 상태관리 통해 골라쓰기 */

import { BLACK_1 } from '../styles/theme';
import { VoteTarget } from '../components/Icons/VoteTarget';
import { isLeaderClickedState, votedLeaderState } from '../states/LeaderVotePageState';
import { useRecoilState } from 'recoil';
import { CheckButton } from '../components/Icons/Checkbutton';

export function PartLeaderVote() {
  const [isClicked, setIsClicked] = useRecoilState(isLeaderClickedState);
  const [votedLeader, setVotedLeader] = useRecoilState(votedLeaderState);

  const onTargetButtonCick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    if (isClicked && name === votedLeader) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
      setVotedLeader(name);
    }
  };

  const onCheckButtonClick = () => {
    if (isClicked) {
      // TODO api 연결
    } else return;
  };

  return (
    <Container>
      <Header />
      <Section>
        <PartVoteTitleFront />
        <LeaderNameListWrapper>
          <VoteTarget name="강나연" onClick={onTargetButtonCick} />
          <VoteTarget name="장영준" onClick={onTargetButtonCick} />
          <VoteTarget name="오지은" onClick={onTargetButtonCick} />
          <VoteTarget name="안채연" onClick={onTargetButtonCick} />
          <VoteTarget name="유선호" onClick={onTargetButtonCick} />
          <VoteTarget name="임채리" onClick={onTargetButtonCick} />
          <VoteTarget name="정희수" onClick={onTargetButtonCick} />
          <VoteTarget name="김선영" onClick={onTargetButtonCick} />
          <VoteTarget name="이한비" onClick={onTargetButtonCick} />
          <VoteTarget name="이현영" onClick={onTargetButtonCick} />
        </LeaderNameListWrapper>
      </Section>
      <ButtonWrapper>
        <CheckButton isClicked={isClicked} onClick={onCheckButtonClick} />
      </ButtonWrapper>
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

const LeaderNameListWrapper = styled.div`
  width: 240px;
  display: grid;
  justify-content: space-between;
  align-items: center;
  margin-top: 44px;
  grid-template-columns: auto auto;
  grid-template-rows: 88px 88px 88px 88px 88px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 65%;
  top: 58%;
`;
