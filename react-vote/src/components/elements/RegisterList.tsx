import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { join } from '../../api/userRequest';
import useInput from '../../hooks/useInput';
import { setRefreshToken } from '../../storage/Cookie';
import SubmitButton from '../Icons/SubmitButton';

const RegisterList = () => {
  const { register, watch, handleSubmit } = useForm();
  console.log(watch());

  const [isActive, setIsActive] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='name' {...register('name')} />
      <input type='text' placeholder='id' {...register('user_id')} />
      <input type='email' placeholder='email' {...register('email')} />
      <input type='password' placeholder='password' {...register('password')} />
      <input
        type='password'
        placeholder='confirm password'
        {...register('confirm password')}
      />
      <select {...register('team')}>
        <option value='forget_me_not'>Forget Me Not.</option>
        <option value='prefolio'>Pre:folio</option>
        <option value='teample'>Teample</option>
        <option value='diametes'>diaMEtes</option>
        <option value='recipeasy'>Recipeasy</option>
      </select>
      <RadioWrapper>
        <div>
          <input
            type='radio'
            id='part'
            value='frontend'
            {...register('part')}
          />
          Front-end
        </div>
        <div>
          <input type='radio' value='backend' {...register('part')} />
          Back-end
        </div>
      </RadioWrapper>
      <SubmitButton content={'Join'} isActive={isActive} />
    </RegisterForm>
  );
};

export default RegisterList;

const RegisterForm = styled.form`
  width: 370px;

  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
