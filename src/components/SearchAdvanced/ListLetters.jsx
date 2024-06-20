import { Letters } from "../../data/Letters";
const ListLetters = () => {
  return (
    <>
      {Letters.map((letter, idx) => (
        <a key={idx}>{letter}</a>
      ))}
    </>
  );
};

export default ListLetters;
