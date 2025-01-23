import SignInForm from '../../components/sign-in-form/Sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/Sign-up-form.components';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
