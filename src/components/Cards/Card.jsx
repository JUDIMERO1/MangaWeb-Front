import { Link, useLocation } from "react-router-dom";
import routers from "../../helper/Routers";

const Card = ({ file }) => {
  const location = useLocation();
  const cardStyle = {
    width: `${file.tipo.nombre === 'scanlation' && location.pathname === '/profile/12' ? 'calc((100% - 40px) / 4)' : 'calc((100% - 40px) / 5)'}`,
  };

  return (
    <Link to={routers.serie} className="card-hottest" style={cardStyle}>
      <div className="title-card__hottest">
        <p>{file.nombre}</p>
      </div>
      <img src={`data:image/jpeg;base64,${file.imagen}`} alt={file.nombre} />
      <div className="type-card__hottest">
        <p>{file.tipo.nombre}</p>
      </div>
    </Link>
  );
};

export default Card;
