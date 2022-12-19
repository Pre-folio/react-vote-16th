import styled from 'styled-components';

const RegisterList = () => {
  return (
    <RegisterForm>
      <input type='text' placeholder='name' />
      <input type='text' placeholder='id' />
      <input type='email' placeholder='email' />
      <input type='password' placeholder='password' />
      <input type='password' placeholder='confirm password' />
      <select>
        <option value='prefolio'>prefolio</option>
        <option value='teample'>teample</option>
        <option value='diaMEtes'>diaMetes</option>
        <option value='recipeasy'>recipeasy</option>
        <option value='forgetmenot'>forgetmenot</option>
      </select>
      <RadioWrapper>
        <div>
          <input type='radio' name='part' value='Front-end' checked />
          Front-end
        </div>
        <div>
          <input type='radio' name='part' value='Back-end' />
          Back-end
        </div>
      </RadioWrapper>
    </RegisterForm>
  );
};

export default RegisterList;

const RegisterForm = styled.form`
  width: 370px;
  height: 370px;

  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
