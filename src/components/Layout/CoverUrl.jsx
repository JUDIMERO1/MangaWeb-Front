const CoverUrl = (props) => {
  const { cover, children } = props;
  return (
    <div className="cover-url" style={{ backgroundImage: `url(${cover})` }}>
      <div className="shadow"></div>
      {children}
    </div>
  );
};

export default CoverUrl;
