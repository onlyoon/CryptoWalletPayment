import classes from './Container.module.css';
import Header from '../components/MainPage/Header/Header';
import Category from '../components/MainPage/Category/Category';
import Footer from '../components/MainPage/Footer/Footer';
import WalletView from '../components/MainPage/ContainerComponents/BlockchainManager/WalletView/WalletView';
import ModalComponent from '../components/Modal/ModalComponent';
import { useState } from 'react';

const MainWalletViewPage = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <div className={classes.container}>
      <Header />
      <Category />
      <WalletView />
      <Footer />
      {modalIsShown && <ModalComponent />}
    </div>
  );
};

export default MainWalletViewPage;
