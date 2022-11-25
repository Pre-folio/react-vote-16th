import styled from 'styled-components';
import { Logo } from '../Icons/Logo';
import { useNavigate } from 'react-router-dom';
import { DefaultButton } from '../Icons/DefaultButton';
import React from 'react';

export function Header() {
  const navigate = useNavigate();

  const onClickLogoButton = () => {
    navigate(0);
  };
  const onClicCategoryButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const content = e.currentTarget.name.toLowerCase();
    navigate(`/${content}`);
  };

  return (
    <Wrapper>
      <Logo onClick={onClickLogoButton} />
      <ContentWrapper>
        <DefaultButton onClick={onClicCategoryButton} content="Result" />
        <DefaultButton onClick={onClicCategoryButton} content="Login" />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100vw;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 40px;
  /* border-bottom: 1px solid black; */
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
