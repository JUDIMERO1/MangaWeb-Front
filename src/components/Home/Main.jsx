import Card from "../Cards/Card";
import { Mangas } from "../../data/Mangas";

const Main = () => {
  return (
    <main>
      <section class="hottest">
        <div class="main-hottest">
          <a class="active">Populares</a>
          <a>P. Seinen</a>
          <a>P. Josei</a>
        </div>
        <div class="list-hottest">
          <div class="list-hottest__list">
            {Mangas.map((manga, idx) => (
              <Card key={idx} file={manga} />
            ))}
          </div>
          <a>Ver Todo</a>
        </div>
      </section>
      <section class="hottest">
        <h1>Ultimos añadidos</h1>
        <div class="list-hottest">
          <div class="list-hottest__list">
            {Mangas.map((manga, idx) => (
              <Card key={idx} file={manga} />
            ))}
          </div>
        </div>
      </section>
      <section class="hottest">
        <h1>Ultimas Subidas</h1>
        <div class="list-hottest">
          <div class="list-hottest__list">
            {Mangas.map((manga, idx) => (
              <Card key={idx} file={manga} />
            ))}
          </div>
          <a>Ver todos</a>
        </div>
      </section>
    </main>
  );
};

export default Main;
