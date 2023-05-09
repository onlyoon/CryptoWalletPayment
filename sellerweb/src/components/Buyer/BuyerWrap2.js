import { useState } from "react";

import BuyerHeader from "./BuyerHeader/BuyerHeader";
import BuyerFooter from "./BuyerFooter/BuyerFooter";
import BuyerContainer2 from "./BuyerContainer/BuyerContainer2.js";
import classes from "./BuyerWrap.module.css";
import Modal from "../Modal";

const BuyerWrap2 = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };
  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <div className={classes.b_wrap}>
      <BuyerHeader />
      <BuyerContainer2 onShowModal={showModalHandler} />
      <BuyerFooter />
      {modalIsShown && <Modal onClose={hideModalHandler}/>}
    </div>
  );
};

export default BuyerWrap2;
