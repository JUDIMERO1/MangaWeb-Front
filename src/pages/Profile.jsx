import { Link } from "react-router-dom";
import { Profiles } from "../data/Profiles";
import Header from "../components/Layout/Header";
import Cover from "../components/Layout/Cover";
import MainActions from "../components/Layout/MainActions";
import Footer from "../components/Layout/Footer";
import MyGroups from "../components/Profile/MyGroups";

const Profile = () => {
  return (
    <>
      <Header />
      <Cover info={Profiles[0]}>
        <MainActions>
          <Link>Leidos</Link>
          <Link>Pendientes</Link>
          <Link>Siguiendo</Link>
          <Link>Favoritos</Link>
          <Link>Lo tengo</Link>
          <Link>Abandonado</Link>
        </MainActions>
      </Cover>
      <MyGroups />
      <Footer />
    </>
  );
};

export default Profile;
