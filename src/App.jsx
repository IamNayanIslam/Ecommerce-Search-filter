import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./db/data";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState(data);

  const [selectedCategory, setSelectedCategory] = useState(null);

  //input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //radio filter
  const handleChange = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  };

  //buttons filter

  const handleClick = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div className="wrap">
        <div className="asidebar-container">
          <Sidebar handleChange={handleChange} />
        </div>
        <div className="main-container">
          <Nav query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </div>
      </div>
    </>
  );
}

export default App;
