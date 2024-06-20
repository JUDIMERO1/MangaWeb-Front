import ListLetters from "./ListLetters";

const FilterGroups = () => {
  return (
    <>
      <div className="filter-letter">
        <ListLetters />
      </div>
      <div>
        <form autoComplete="off">
          <select>
            <option>ASC</option>
            <option>DESC</option>
          </select>
          <select>
            <option>Seguidores</option>
            <option>Alfabetico</option>
          </select>
          <input type="submit" name="submit" value="FILTRAR" />
        </form>
      </div>
    </>
  );
};

export default FilterGroups;
