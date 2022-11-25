import styled from 'styled-components';
import { ButtonProps } from '../interfaces';

export function DefaultButton({ content, width = '120px', onClick }: ButtonProps) {
  return (
    <ButtonWrapper name={content} onClick={onClick} width={width}>
      <span className="button">{content}</span>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 44px;
  background-color: #e0e0e0;
  border-radius: 200px;
  color: #484848;
`;
