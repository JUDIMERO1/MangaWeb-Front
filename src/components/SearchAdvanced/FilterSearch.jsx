import ListLetters from "./ListLetters";

const FilterSearch = (props) => {
  const { open, setopen } = props;
  const max = new Date().getFullYear();
  const min = max - 100;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }

  return (
    <>
      <div className="filter-letter">
        <ListLetters />
        <span onClick={() => setopen(!open)}>
          {open ? "Cerrar" : "Por género"}
        </span>
        <span>Por tipo</span>
      </div>
      <div>
        <form autoComplete="off">
          <select>
            <option>ASC</option>
            <option>DESC</option>
          </select>
          <select>
            <option>Cualquiera</option>
            <option>En emision</option>
            <option>Finalizado</option>
            <option>Por estrenar</option>
          </select>
          <select>
            <option>Titulo</option>
            <option>Autor</option>
            <option>Compañia</option>
          </select>
          <select>
            {years.map((year) => (
              <option>{year}</option>
            ))}
          </select>
          <input type="submit" name="submit" value="FILTRAR" />
        </form>
      </div>
    </>
  );
};

export default FilterSearch;
