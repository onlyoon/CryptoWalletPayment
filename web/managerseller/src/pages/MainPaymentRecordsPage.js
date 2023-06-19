import classes from './Container.module.css';
import Header from '../components/MainPage/Header/Header';
import Category from '../components/MainPage/Category/Category';
import Footer from '../components/MainPage/Footer/Footer';
import PaymentRecords from '../components/MainPage/ContainerComponents/NetworkManager/PaymentRecord/PaymentRecords';
import { useEffect } from 'react';

const MainPaymentRecordsPage = ({ isValidLogin }) => {
  useEffect(() => {
    const curAccessToken = localStorage.getItem('accessToken');
    // console.log('curAccessToken:', curAccessToken);

    isValidLogin(curAccessToken);
  }, []);
  return (
    <div className={classes.container}>
      <Header />
      <Category />
      <PaymentRecords />
      <Footer />
    </div>
  );
};

export default MainPaymentRecordsPage;
