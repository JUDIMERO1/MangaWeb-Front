import { useState } from "react";
import { Link } from "react-router-dom";
import routers from "../../helper/Routers";
import { useOrder } from "../../hooks/useOrder";

const ListChapters = (props) => {
  const { chapters } = props;
  const { items, handleOrder } = useOrder(chapters);


  const [caps, setcaps] = useState({
    chapters: items
  })

  const [q, setq] = useState({
    q_chapter: "",
  });

  const { q_chapter } = q;
  
  const onChange = e => {
    setq({
      ...q,
      [e.target.name]: e.target.value
    });
    setcaps({
      ...caps,
      chapters: caps.chapters.filter(item => item.name.includes(q_chapter))
    })    
  }

  return (
    <>
      <div className="list-chapters">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <p className="title">Lista de Capitulos</p>
          <div>
            <span onClick={() => handleOrder()}>ASC/DESC</span>
            <input type="text" name="q_chapter" value={q_chapter} onChange={onChange} placeholder="Filtrar..." />
          </div>
        </div>
        <div className="chapters">
          {caps.chapters.map((chapter, idx) => (
            <Link to={routers.read} className="chapter" key={idx}>
              <p>Capítulo: {chapter.name}</p>
              <p>Fecha de publicacion: {chapter.datePost}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListChapters;
