import Aside from "../components/Layout/Aside";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Main from "../components/Home/Main";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default Home;
