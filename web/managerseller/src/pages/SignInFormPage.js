import classes from './SignFormPage.module.css';
import SignIn from '../components/LoginPage/SignIn';

const SignInFormPage = () => {
  return (
    <div className={classes.login}>
      <SignIn />
    </div>
  );
};

export default SignInFormPage;
