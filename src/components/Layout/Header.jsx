import { Link } from "react-router-dom";
import routers from "../../helper/Routers";

const Header = () => {
  return (
    <header className="container">
      <nav className="navbar">
        <div className="main-menu">
          <Link to={routers.home}>
            <b>mangaWeb</b>
            <i></i>
          </Link>
          <Link to={routers.library}>biblioteca</Link>
          <Link to={routers.groups}>grupos</Link>
        </div>
        <div className="main-menu">
          <form autoComplete="off">
            <div>
              <input type="search" placeholder="Buscar..." name="q" id="q" />
            </div>
          </form>
          <Link to={routers.login}>acceder</Link>
          <Link to={routers.logUp}>registrar</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
