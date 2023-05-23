import classes from './Wallet.module.css';

const Wallet = () => {
  const imgObject = {
    url: 'https://metamask.io/icons/icon-48x48.png?v=48400a28770e10dd52a8c0e539aeb282',
  };

  return (
    <div className={classes.component_wrap}>
      <div className={classes.component_components}>
        <div className={classes.component_component_no1}>
          <div>SVG파일</div>
          <img src={imgObject.url} alt="" />
        </div>
        <div className={classes.component_component_no2}>
          <button className={classes.component_component_no2_button}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
