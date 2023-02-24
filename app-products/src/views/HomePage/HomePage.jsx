import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        p.code.toLowerCase().includes(search.trim().toLowerCase())
    );
    console.log(filtered);
    setFilteredProducts(filtered);
  };

  const clearFilter = () => {
    setFilteredProducts(products);
    setSearch("");
  };

  const getProducts = async () => {
    const { data } = await axios("products.json");
    return setProducts(data.dataProducts);
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 3000);
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return !products.length ? (
    <div className={style.content_loader}>
      <span className={style.loader}></span>
    </div>
  ) : (
    <div className={style.container}>
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
      />
      {!search ? null : (
        <div className={style.search_filter}>
          <p>
            {search}
            <button onClick={clearFilter}>X</button>
          </p>
        </div>
      )}

      {!filteredProducts.length ? (
        <div className={style.content_results}>
          <p>No se han encontrado productos con ese nombre</p>
        </div>
      ) : (
        <div className={style.content_results}>
          <CardList products={filteredProducts} />
          <p>{filteredProducts.length} resultados</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
