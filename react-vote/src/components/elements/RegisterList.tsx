import styled from 'styled-components';
import SubmitButton from '../Icons/SubmitButton';

const RegisterList = () => {
  return (
    <RegisterForm>
      <input type='text' placeholder='name' />
      <input type='text' placeholder='id' />
      <input type='email' placeholder='email' />
      <input type='password' placeholder='password' />
      <input type='password' placeholder='confirm password' />
      <select>
        <option value='forget_me_not'>Forget Me Not.</option>
        <option value='prefolio'>Pre:folio</option>
        <option value='teample'>Teample</option>
        <option value='diametes'>diaMEtes</option>
        <option value='recipeasy'>Recipeasy</option>
      </select>
      <RadioWrapper>
        <div>
          <input type='radio' id='part' name='part' value='frontend' />
          <label htmlFor='part'>Front-end</label>
        </div>
        <div>
          <input type='radio' name='part' value='backend' />
          Back-end
        </div>
      </RadioWrapper>
      <SubmitButton content={'Join'} isActive={true} />
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
