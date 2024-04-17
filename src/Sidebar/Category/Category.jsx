import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title">Category</h2>
      {/* <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>Sneakers
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>Flats
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>Sandals
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>Heels
      </label> */}
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="all"
          name="category"
        />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="category"
      />
      <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="category"
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="category"
      />
      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="category"
      />
    </div>
  );
};

export default Category;
