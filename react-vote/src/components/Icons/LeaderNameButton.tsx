import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { LeaderNameButtonProps } from '../../interfaces';
import { isClickedState, votedLeaderState } from '../../states/LeaderVotePageState';

export function LeaderNameButton({ name, onClick }: LeaderNameButtonProps) {
  const isClicked = useRecoilValue(isClickedState);
  const votedLeader = useRecoilValue(votedLeaderState);

  return (
    <Column>
      <NameArea onClick={onClick} name={name}>
        {name || '주효정'}
      </NameArea>
      {isClicked && votedLeader === name ? <Line /> : <></>}
    </Column>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NameArea = styled.button`
  font-size: 30px;
  position: relative;
  top: 8px;
  z-index: 1;
`;

const Line = styled.div`
  width: 88px;
  height: 16px;
  background: #facacf;
  position: relative;
  top: -8px;
`;
