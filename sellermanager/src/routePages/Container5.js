import classes from "./Container.module.css";
import Header from "../components/Header/Header";
import Category from "../components/Category/Category";
import Footer from "../components/Footer/Footer";
import PaymentRecord from "../components/ContainerComponents/NetworkManager/PaymentRecord/PaymentRecord";

const Container5 = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Category />
      <PaymentRecord />
      <Footer />
    </div>
  );
};

export default Container5;
