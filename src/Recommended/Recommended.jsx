import Buttons from "../components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {/* <button className="btns" onClick={handleClick}>
            All Products
          </button>
          <button className="btns" onClick={handleClick}>
            Nike
          </button>
          <button className="btns" onClick={handleClick}>
            Adidas
          </button>
          <button className="btns" onClick={handleClick}>
            Puma
          </button>
          <button className="btns" onClick={handleClick}>
            Vans
          </button> */}

          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
