import classes from './Container.module.css';
import Header from '../components/MainPage/Header/Header';
import Category from '../components/MainPage/Category/Category';
import Footer from '../components/MainPage/Footer/Footer';
import WalletManage from '../components/MainPage/ContainerComponents/WalletManager/WalletManage/WalletManage';
import { useEffect } from 'react';

const MainWalletManagePage = ({ isValidLogin, walletImage }) => {
  useEffect(() => {
    const curAccessToken = localStorage.getItem('accessToken');
    isValidLogin(curAccessToken);
  }, []);
  return (
    <div className={classes.container}>
      <Header />
      <Category />
      <WalletManage />
      <Footer />
    </div>
  );
};

export default MainWalletManagePage;
