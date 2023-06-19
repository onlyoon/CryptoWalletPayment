import classes from './Container.module.css';
import Header from '../components/MainPage/Header/Header';
import Category from '../components/MainPage/Category/Category';
import Footer from '../components/MainPage/Footer/Footer';
import BlockchainManage from '../components/MainPage/ContainerComponents/WalletManager/BlockchainManage/BlockchainManage';
import { useEffect } from 'react';
const MainBlockchainManagePage = ({ isValidLogin }) => {
  useEffect(() => {
    const curAccessToken = localStorage.getItem('accessToken');
    // console.log('curAccessToken:', curAccessToken);

    isValidLogin(curAccessToken);
  }, []);
  return (
    <div className={classes.container}>
      <Header />
      <Category />
      <BlockchainManage />
      <Footer />
    </div>
  );
};

export default MainBlockchainManagePage;
