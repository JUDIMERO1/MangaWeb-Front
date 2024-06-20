import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import SearchAdvanced from "../components/SearchAdvanced/SearchAdvanced";
import TypeFilter from "../components/SearchAdvanced/TypeFilter";
import FilterGroups from "../components/SearchAdvanced/FilterGroups";
import ListGenders from "../components/SearchAdvanced/ListGenders";
import { useOpen } from "../hooks/useOpen";
import GroupsFounded from "../components/Layout/GroupsFounded";

const Groups = () => {
  const { open } = useOpen();
  return (
    <>
      <Header />
      <div className="container" style={{flexDirection: 'column'}}>
        <SearchAdvanced>
          <TypeFilter>
            <FilterGroups />
          </TypeFilter>
          <ListGenders open={open} />
        </SearchAdvanced>
        <GroupsFounded />
      </div>
      <Footer />
    </>
  );
};

export default Groups;
