import classes from "./PaymentRecord.module.css";

const PaymentRecord = () => {
  return (
  <div className={classes.paymentrecord_wrap}>
    <div className={classes.paymentrecord}>
      <div className={classes.paymentrecord_text}>결제내역</div>
      <div className={classes.paymentrecord_table_wrap}>
        <div className={classes.check_table}>
          <div className={classes.check_table_text}>결제 기간</div>
          <div className={classes.date_bar}>
            <input type={"date"} /> 
            <div>~</div> 
            <input type={"date"} />
          </div>
          <button className={classes.check_table_button}>조회</button>
        </div>
        <div>Table</div>
      </div>
    </div>
  </div>);
};

export default PaymentRecord;
