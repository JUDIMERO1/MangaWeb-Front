import { Genders } from "../../data/Genders";
const ListGenders = (props) => {
  const { open } = props;
  return (
    <div
      className={open ? "genders slideGenderOpen" : "genders slideGenderClose"}
      style={open ? { display: "block" } : { display: 'none' }}
    >
      <h3>Mangas por género:</h3>
      <ul>
        {Genders.map((gender, idx) => (
          <li key={idx}>
            <a>{gender}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGenders;
