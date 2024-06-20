import { Groups } from "../../data/Groups";
import Card from "../Cards/Card";
const GroupsFounded = () => {
  return (
    <main className="main-founded">
      <section class="hottest">
        <div class="list-hottest">
          <div class="list-hottest__list">
            {Groups.map((group, idx) => (
              <Card key={idx} file={group} />
            ))}
          </div>
          <a className="btn-see-more">Mostrar más</a>
        </div>
      </section>
    </main>
  );
};

export default GroupsFounded;
