import { Link } from 'react-router-dom';
import classes from './SignIn.module.css';
import { useState } from 'react';

const SignIn = () => {
  const [signInId, setSignInId] = useState('');
  const [signInPw, setSignInPw] = useState('');
  const [savedSignInId, setSavedSignInId] = useState('');
  const [savedSignInPw, setSavedSignInPw] = useState('');

  // let localStorage = window.localStorage;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const pass = formData.get('password');
    console.log(email, pass);
  };

  const signInButtonClickHandler = () => {
    localStorage.setItem('signInId', signInId);
    localStorage.setItem('signInPw', signInPw);

    setSavedSignInId(localStorage.getItem('signInId'));
    setSavedSignInPw(localStorage.getItem('signInPw'));
    console.log('singed one : ' + signInId, signInPw);
    console.log('saved one : ' + savedSignInId, savedSignInPw);
    console.log(JSON.stringify(localStorage));
  };

  return (
    <div className={classes.login_component}>
      <div className={classes.wrap}>
        <h1>Seller Manager</h1>
        <h1>Login</h1>
        <form id="signinForm" className={classes.form} onSubmit={handleSubmit}>
          <input
            className={classes.inputaddress}
            type={'text'}
            id="username"
            placeholder="Username"
            required
            autoComplete="email"
            onChange={(e) => {
              setSignInId(e.target.value);
            }}
          ></input>
          <input
            className={classes.inputaddress}
            type={'password'}
            id="password"
            placeholder="Password"
            required
            autoComplete="current-password"
            onChange={(e) => {
              setSignInPw(e.target.value);
            }}
          ></input>
          <div className={classes.signbuttons}>
            <Link to={'#'} className={classes.signinbutton}>
              <button
                type="submit"
                id="signinbutton"
                className={classes.signinbutton}
                onClick={signInButtonClickHandler}
              >
                로그인
              </button>
            </Link>
            <Link to={'/signup'} className={classes.signupbutton}>
              <button
                type="submit"
                id="signupbutton"
                className={classes.signinbutton}
              >
                회원가입
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
