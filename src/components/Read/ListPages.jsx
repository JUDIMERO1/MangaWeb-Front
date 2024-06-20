import { ListPages as Pages } from "../../data/ListaPages";

const ListPages = () => {
    console.log(Pages)
  return (
    <div className="list-pages">
      {Pages.map((page, idx) => 
        <img key={idx} src={page.img} alt={page.alt} />
      )}
    </div>
  );
};

export default ListPages;
