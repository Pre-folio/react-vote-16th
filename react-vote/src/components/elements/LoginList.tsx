import styled from 'styled-components';
import SubmitButton from '../Icons/SubmitButton';

const LoginList = () => {
  return (
    <LoginForm>
      <input type='text' placeholder='id' />
      <input type='password' placeholder='password' />
      <SubmitButton content={'Login'} isActive={false} />
    </LoginForm>
  );
};

export default LoginList;

const LoginForm = styled.form`
  width: 370px;

  display: flex;
  flex-direction: column;
`;
