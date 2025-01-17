import React, { useState } from 'react';
import FormInput from '../form-input/Form-input.component';
import Button from '../button/Button.component';
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Form submitted: ', formFields);
    setFormFields({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          name='displayName'
          value={formFields.displayName}
          onChange={handleChange}
          autoComplete='name'
          required
        />
        <FormInput
          label='Email'
          type='email'
          name='email'
          value={formFields.email}
          onChange={handleChange}
          autoComplete='username'
          required
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          value={formFields.password}
          onChange={handleChange}
          autoComplete='new-password'
          required
        />
        <FormInput
          label='Confirm password'
          type='password'
          name='confirmPassword'
          value={formFields.confirmPassword}
          onChange={handleChange}
          autoComplete='new-password'
          required
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
