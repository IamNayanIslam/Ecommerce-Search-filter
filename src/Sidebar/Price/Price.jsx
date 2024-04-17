import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        {/* <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$0 - $50
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$50 - $100
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$100 - $150
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>Over $150
        </label> */}
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="price" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over $50"
          name="price"
        />
      </div>
    </>
  );
};

export default Price;
