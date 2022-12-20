import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { login } from '../../api/userRequest';
import useInput from '../../hooks/useInput';
import { setRefreshToken } from '../../storage/Cookie';
import SubmitButton from '../Icons/SubmitButton';

const LoginList = () => {
  const [isActive, setIsActive] = useState(false);

  const id = useInput('');
  const password = useInput('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log('id', id.value);
    console.log('pw', password.value);
    if (id.value !== '' && password.value !== '') {
      const response = await login({
        user_id: id.value,
        password: password.value,
      });
      if (response) {
        setRefreshToken(response.token.refresh);
      }
      console.log(response);
    }
  };

  useEffect(() => {
    if (id.value !== '' && password.value !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [id.value, password.value]);

  return (
    <LoginForm onSubmit={handleLogin}>
      <input
        type='text'
        name='id'
        placeholder='id'
        value={id.value}
        onChange={id.onChange}
      />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={password.value}
        onChange={password.onChange}
      />
      <SubmitButton content={'Login'} isActive={isActive} />
    </LoginForm>
  );
};

export default LoginList;

const LoginForm = styled.form`
  width: 370px;

  display: flex;
  flex-direction: column;
`;
