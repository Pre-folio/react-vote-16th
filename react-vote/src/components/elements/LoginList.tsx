import { useEffect } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';
import { login } from '../../api/userRequest';
import { LoginProps } from '../../interfaces';
import { LoginSelector } from '../../states/loginState';
import SubmitButton from '../Icons/SubmitButton';

const LoginParam: LoginProps = {
  user_id: 'nay3on',
  password: 'skdus0206!',
};
const LoginList = () => {
  const loginSelector = useRecoilValue(LoginSelector);

  //   useEffect(() => {
  //     login(LoginParam).then((res) => console.log(res));
  //   }, []);

  return (
    <LoginForm>
      <input type='text' name='id' placeholder='id' />
      <input type='password' name='password' placeholder='password' />
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
