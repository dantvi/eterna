import React, { useState } from 'react';
import FormInput from '../form-input/Form-input.component';
import './Sign-up-form.styles.scss';

type FormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form>
        <FormInput
          label='Display Name'
          type='text'
          name='displayName'
          value={formFields.displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Email'
          type='email'
          name='email'
          value={formFields.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          value={formFields.password}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Confirm password'
          type='password'
          name='confirmPassword'
          value={formFields.confirmPassword}
          onChange={handleChange}
          required
        />
      </form>
    </div>
  );
};

export default SignUpForm;
