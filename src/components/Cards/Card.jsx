import { Link, useLocation } from "react-router-dom";
import routers from "../../helper/Routers";

const Card = ({file}) => {
  const location = useLocation();
  console.log(location.pathname + " " + file.type);
  const cardStyle = {
    width: `${file.type === 'scanlation' && location.pathname === '/profile/12' ? 'calc((100% - 40px) / 4)' : 'calc((100% - 40px) / 5)'}`,
  };
  return (
    <Link to={routers.serie} className="card-hottest" style={cardStyle}>
      <div className="title-card__hottest">
        <p>{file.name}</p>
      </div>
      <img src={file.thumb} alt="" />
      <div className="type-card__hottest">
        <p>{file.type}</p>
      </div>
    </Link>
  );
};

export default Card;
