import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/Form-input.component';
import Button from '../buttons/Button.component';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';

import './Sign-in-form.styles.scss';

type FormFields = {
  email: string;
  password: string;
};

const defaultFormFields: FormFields = {
  email: '',
  password: '',
};

const SignInForm: React.FC = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.error('Google Sign-In error', error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate('/shop');
    } catch (error: any) {
      console.error('Error during sign-in:', error);
      switch (error.code) {
        case 'auth/invalid-credential':
          alert('Invalid email or password.');
          break;
        case 'auth/too-many-requests':
          alert(
            'Too many failed login attempts. Please reset your password or try again later.'
          );
          break;
        default:
          console.error('Sign-in error', error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
