import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import { getObras } from '../../services/obra';

const Main = () => {
  const [obras, setObras] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchObras = async () => {
      try {
        const data = await getObras();
        setObras(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchObras();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <section className="hottest">
        <div className="main-hottest">
          <a className="active">Populares</a>
          <a>P. Seinen</a>
          <a>P. Josei</a>
        </div>
        <div className="list-hottest">
          <div className="list-hottest__list">
            {obras.map((obra, idx) => (
              <Card key={idx} file={obra} />
            ))}
          </div>
          <a>Ver Todo</a>
        </div>
      </section>
      <section className="hottest">
        <h1>Ultimas Subidas</h1>
        <div className="list-hottest">
          <div className="list-hottest__list">
            {obras.map((obra, idx) => (
              <Card key={idx} file={obra} />
            ))}
          </div>
          <a>Ver todos</a>
        </div>
      </section>
    </main>
  );
};

export default Main;
