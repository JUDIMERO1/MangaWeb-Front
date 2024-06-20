const Badges = ({ genres, ...props }) => {
  return (
    <>
      <p className="title">Géneros</p>
      <div className="content-badge">
        {genres.map((genre) => (
          <a className="badge-genre">{genre}</a>
        ))}
      </div>
    </>
  );
};

export default Badges;
