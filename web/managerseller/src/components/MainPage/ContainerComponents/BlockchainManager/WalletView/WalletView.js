import classes from './WalletView.module.css';

const WalletView = (props) => {
  // const imgObject = [
  //   {
  //     id: 1,
  //     wallet: 'Metamask',
  //   },
  // ];

  return (
    <div className={classes.walletview_wrap}>
      <div className={classes.walletview}>
        <div className={classes.walletview_text}>지갑조회/등록</div>
        <div className={classes.walleview_components_wrap}>
          <div className={classes.components}>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>RAINBOW</div>
                  <img
                    className={classes.wallet_img}
                    src={require('../../../../../asset/images/Rainbow.png')}
                    alt="이미지"
                  />
                </div>
                <div className={classes.component_component_no2}>
                  <button
                    className={classes.component_component_no2_button}
                    onClick={props.onShowModal}
                  >
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>METAMASK</div>
                  <img
                    className={classes.wallet_img}
                    src={require('../../../../../asset/images/MetaMask.png')}
                    alt="이미지"
                  />
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>SVG파일</div>
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>SVG파일</div>
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>SVG파일</div>
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>SVG파일</div>
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>SVG파일</div>
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>SVG파일</div>
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>SVG파일</div>
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.component_wrap}>
              <div className={classes.component_components}>
                <div className={classes.component_component_no1}>
                  <div>SVG파일</div>
                </div>
                <div className={classes.component_component_no2}>
                  <button className={classes.component_component_no2_button}>
                    등록
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletView;
