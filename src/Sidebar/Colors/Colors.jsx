import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <div className="ml">
        <h2 className="sidebar-title color-title">Colors</h2>

        {/* <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>Black
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>Blue
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>Red
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>Green
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>White
        </label> */}
        <label className="sidebar-label-container">
          <input type="radio" name="colors" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
        />
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="color"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="color"
        />
      </div>
    </div>
  );
};

export default Colors;
