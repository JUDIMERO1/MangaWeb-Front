import Card from "../Cards/Card";
import { Mangas } from "../../data/Mangas";
const MangasFounded = () => {
  return (
    <main className="main-founded">
      <section class="hottest">
        <div class="list-hottest">
          <div class="list-hottest__list">
            {Mangas.map((manga, idx) => (
              <Card key={idx} file={manga} />
            ))}
          </div>
          <a className="btn-see-more">Mostrar más</a>
        </div>
      </section>
    </main>
  );
};

export default MangasFounded;
