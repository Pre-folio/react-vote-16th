import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import { Container } from '../components/elements/Wrapper';
import { DemoDayVoteTitleBack } from '../components/Icons/Title/DemoDayVoteTitleBack';
import { DemoDayVoteTitleFront } from '../components/Icons/Title/DemoDayVoteTitleFront';
/* 파트가 front인지 back인지 상태관리 통해 골라쓰기 */

import { BLACK_1 } from '../styles/theme';
import { LeaderNameButton } from '../components/Icons/LeaderNameButton';
import { isClickedState, votedLeaderState } from '../states/LeaderVotePageState';
import { useRecoilState } from 'recoil';
import { CheckButton } from '../components/Icons/Checkbutton';

export function PartLeaderVote() {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const [votedLeader, setVotedLeader] = useRecoilState(votedLeaderState);

  const onClickNameButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    const name = e.currentTarget.name;
    setVotedLeader(name);
  };

  const onCheckButtonClick = () => {
    if (isClicked) {
      // axios
    } else return;
  };

  return (
    <Container>
      <Header />
      <Section>
        <DemoDayVoteTitleFront />
        <LeaderNameListWrapper>
          <LeaderNameButton name="강나연" onClick={onClickNameButton} />
          <LeaderNameButton name="장영준" onClick={onClickNameButton} />
          <LeaderNameButton name="오지은" onClick={onClickNameButton} />
          <LeaderNameButton name="안채연" onClick={onClickNameButton} />
          <LeaderNameButton name="유선호" onClick={onClickNameButton} />
          <LeaderNameButton name="임채리" onClick={onClickNameButton} />
          <LeaderNameButton name="정희수" onClick={onClickNameButton} />
          <LeaderNameButton name="김선영" onClick={onClickNameButton} />
          <LeaderNameButton name="이한비" onClick={onClickNameButton} />
          <LeaderNameButton name="이현영" onClick={onClickNameButton} />
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
