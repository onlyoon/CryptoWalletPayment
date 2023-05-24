import classes from './Wallet.module.css';

const walletSourceList = [
  {
    id: 0,
    name: 'RAINBOW',
    imgUrl: require('../../../../../asset/images/Rainbow.png'),
  },
  {
    id: 1,
    name: 'METAMASK',
    imgUrl: require('../../../../../asset/images/MetaMask.png'),
  },
  {
    id: 2,
    name: 'TRUSTWALLET',
    imgUrl: require('../../../../../asset/images/TrustWallet.png'),
  },
  {
    id: 3,
    name: 'CRYPTO.COM',
    imgUrl: require('../../../../../asset/images/CryptoDotCom.png'),
  },
  {
    id: 4,
    name: 'PILLER',
    imgUrl: require('../../../../../asset/images/PillerWallet.png'),
  },
  {
    id: 5,
    name: 'MATH',
    imgUrl: require('../../../../../asset/images/MathWallet.png'),
  },
  {
    id: 6,
    name: 'ARGENT',
    imgUrl: require('../../../../../asset/images/ArgentWallet.png'),
  },
];

const Wallet = (props) => {
  return (
    <>
      {walletSourceList.map((it) => (
        <div className={classes.component_wrap}>
          <div className={classes.component_components}>
            <div className={classes.component_component_no1}>
              <div className={classes.wallet_name}>{it.name}</div>
              <img
                className={classes.wallet_img}
                src={it.imgUrl}
                alt="이미지 파일"
              />
            </div>
            <div className={classes.component_component_no2}>
              <button
                className={classes.component_component_no2_button}
                onClick={props.showModal}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Wallet;
