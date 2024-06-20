import ViewPages from "../components/Read/ViewPage";
import Footer from "../components/Layout/Footer";
import ControlsPages from "../components/Read/ControlsPages";
import ListPages from "../components/Read/ListPages";
const Read = () => {

  return (
    <>
      <ControlsPages />
      <ViewPages>
        <ListPages />
      </ViewPages>
      <Footer />
    </>
  );
};

export default Read;
