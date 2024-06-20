import { useOpen } from "../hooks/useOpen";
import Header from "../components/Layout/Header";
import SearchAdvanced from "../components/SearchAdvanced/SearchAdvanced";
import TypeFilter from "../components/SearchAdvanced/TypeFilter";
import FilterSearch from "../components/SearchAdvanced/FilterSearch";
import MangasFounded from "../components/Layout/MangasFounded";
import Footer from "../components/Layout/Footer";
import ListGenders from "../components/SearchAdvanced/ListGenders";

const Library = () => {
  const { open, setopen } = useOpen();
  return (
    <>
      <Header />
      <div className="container" style={{ flexDirection: "column" }}>
        <SearchAdvanced>
          <TypeFilter>
            <FilterSearch open={open} setopen={setopen} />
          </TypeFilter>
          <ListGenders open={open} />
        </SearchAdvanced>
        <MangasFounded />
      </div>
      <Footer />
    </>
  );
};

export default Library;
