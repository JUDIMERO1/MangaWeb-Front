const BannerContent = (props) => {
  const { name, thumb, description } = props;
  return (
    <div className="container-picture">
      <div className="banner-content">
        <img src={thumb} alt="aeaesf" />
        <div className="summary">
          <div style={{display: 'flex', alignItems: 'center', marginBottom: 10}}>
            <p className="title-profile">{name}</p>
            <button className="btn-editar-profile">Editar</button>
          </div>
          {description !== '' ? <p>{description}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
