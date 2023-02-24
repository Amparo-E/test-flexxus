import style from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = (props) => {
  const { handleChange, handleSubmit, clearSearchBar, search } = props;

  return (
    <div className={style.content_form}>
      <form className={style.content_input}>
        <input type="text" onChange={(e) => handleChange(e)} value={search} />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          <CiSearch /> Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
