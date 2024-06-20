import { Link } from "react-router-dom";
import routers from "../../helper/Routers";

const ControlsPages = () => {
  return (
    <div className="controls-pages">
      <nav className="navbar">
        <div className="main-menu">
          <Link to={routers.home}>
            <b>MangaWeb</b>
            <i></i>
          </Link>
          <Link>
            Kanojo, okarishimasu
          </Link>
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default ControlsPages;
