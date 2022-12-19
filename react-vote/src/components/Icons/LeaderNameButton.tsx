import styled from 'styled-components';
import { LeaderNameButtonProps } from '../../interfaces';

export function LeaderNameButton({ name }: LeaderNameButtonProps) {
  return <NameArea>{name || '주효정'}</NameArea>;
}

const NameArea = styled.span`
  font-size: 42px;
`;
