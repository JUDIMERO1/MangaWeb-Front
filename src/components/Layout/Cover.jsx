import CoverUrl from "./CoverUrl";
import BannerContent from "./BannerContent";

const Cover = (props) => {
  const { children, info } = props;
  return (
    <div className="cover">
      <CoverUrl cover={info.cover}>
        <BannerContent name={info.name} thumb={info.thumb} description={info.summary} />
      </CoverUrl>
      {children}
    </div>
  );
};

export default Cover;
