const Aside = () => {
  return (
    <aside class="sidebar-principal">
      <div class="menu-rating">
        <a href="" class="active">
          top semanal
        </a>
        <a href="">top mensual</a>
      </div>
      <div class="rating-board">
        <div class="rate-pos">
          <div class="pos">1</div>
          <a class="name-pos">
            <span class="badge-manga">MANGA</span> one piece
          </a>
        </div>
        <div class="rate-pos">
          <div class="pos">2</div>
          <a class="name-pos">
            <span class="badge-manga">MANGA</span> one piece
          </a>
        </div>
        <a class="rating-see-more">Ver todo</a>
      </div>
      <div class="menu-rating">
        <a href="" class="active">
          Lista de moda
        </a>
        <a href="">Listas mas seguidas</a>
      </div>
      <div class="rating-board">
        <div class="rate-pos">
          <div class="pos">1</div>
          <a class="name-pos">Cosas que me gustaron</a>
        </div>
        <div class="rate-pos">
          <div class="pos">2</div>
          <a class="name-pos"> yuri</a>
        </div>
        <a class="rating-see-more">Ver todo</a>
      </div>
    </aside>
  );
};

export default Aside;
