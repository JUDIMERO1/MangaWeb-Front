import { Link } from "react-router-dom";
import Cover from "../components/Layout/Cover";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import MainActions from "../components/Layout/MainActions";
import Badges from "../components/Serie/Badges";
import Description from "../components/Serie/Description";
import Information from "../components/Serie/Information";
import ListChapters from "../components/Serie/ListChapters";
import { Mangas } from "../data/Mangas";
import { Chapters } from "../data/Chapters";
const Serie = () => {
  return (
    <>
      <Header />
      <Cover info={Mangas[0]}>
        <MainActions>
          <Link>Leidos</Link>
          <Link>Pendientes</Link>
          <Link>Siguiendo</Link>
          <Link>Favoritos</Link>
          <Link>Lo tengo</Link>
          <Link>Abandonado</Link>
        </MainActions>
      </Cover>
      <Description>
        <Information>
          <div className="desc">
            <Badges genres={Mangas[0].genres} />
            <p className="title">Estado</p>
            <div style={{ position: "relative", marginBottom: 10 }}>
              <span class="icon-red-dot"></span>
              <span style={{ marginLeft: 15 }}>{Mangas[0].status}</span>
            </div>
            <p className="title">Tipo</p>
            <p style={{ marginBottom: 10 }}>{Mangas[0].type}</p>
          </div>
        </Information>
        <ListChapters chapters={Chapters} />
      </Description>
      <Footer />
    </>
  );
};

export default Serie;
