import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import LoginList from '../components/elements/LoginList';

export function Login() {
  const navigate = useNavigate();

  const onClickJoinText = () => {
    navigate('/register');
  };

  return (
    <Container>
      <Header />
      <LoginList />
      <JoinText onClick={onClickJoinText}>회원이 아니신가요?</JoinText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

const JoinText = styled.div`
  text-decoration: underline;
  font-size: 20px;
  text-align: center;

  margin-top: 40px;

  cursor: pointer;
`;
