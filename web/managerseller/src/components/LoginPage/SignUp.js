import { Link } from 'react-router-dom';
import classes from './SignUp.module.css';
import { useState, useEffect } from 'react';
import { userDataDB } from '../../databasefunction/UserDataCRUD';

const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [consumerOrNot, setConsumerOrNot] = useState(0); // 초기값은 판매자(0)
  const [email, setEmail] = useState('');
  const [realName, setRealName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rRNumber, setRRNumber] = useState('');
  const [userData, setUserData] = useState(null);

  const handleCreate = async () => {
    const result = await userDataDB.createUserData(
      id,
      password,
      consumerOrNot,
      email,
      realName,
      phoneNumber,
      rRNumber
    );
    if (result === 1) {
      console.log('user data creation accepted');
    } else {
      console.log('user data creation failed');
    }
  };

  useEffect(() => {
    // 초기 데이터 로드 등 필요한 작업 수행
  }, []);

  return (
    <div className={classes.signupwrap}>
      <div className={classes.wrap}>
        <h1>SignUp</h1>
        <br />
        <form className={classes.form}>
          <input
            className={classes.inputaddress}
            type={'text'}
            id="username"
            value={id}
            placeholder="아이디"
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <input
            className={classes.inputaddress}
            type={'text'}
            id="password"
            value={password}
            placeholder="비밀번호"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className={classes.inputaddress}
            type={'text'}
            id="email"
            value={email}
            placeholder="이메일"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={classes.inputaddress}
            type={'text'}
            id="real_name"
            value={realName}
            placeholder="성명"
            required
            onChange={(e) => setRealName(e.target.value)}
          />
          <input
            className={classes.inputaddress}
            type={'text'}
            id="phone_number"
            value={phoneNumber}
            placeholder="전화번호"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className={classes.inputaddress}
            type={'text'}
            id="resident_registration_number"
            value={rRNumber}
            placeholder="주민등록번호"
            required
            onChange={(e) => setRRNumber(e.target.value)}
          />
          <div className={classes.signbuttons}>
            <button
              type="button"
              onClick={handleCreate}
              className={classes.signinbutton}
            >
              가입
            </button>
          </div>
        </form>
        <Link to={'/'} className={classes.cancelbutton_wrap}>
          <button className={classes.cancelbutton}>취소</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
