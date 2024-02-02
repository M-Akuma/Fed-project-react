import "./products.css";
import Productdetails from "./productdetails";

const Product = () => {
  return (
    <>
      <div className="products">
        <h2> # Products</h2>
        <div class="title-text">
          <p>Products</p>
          <h1>All Products</h1>
        </div>
        <p>Home . Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Top searches</h3>
              <ul>
                <li>Earphones/Headphones</li>
                <li>Watches</li>
                <li>Smart phones</li>
                <li>Tablets</li>
                <li>Laptops</li>
                <li>Cameras</li>
                <li>Gaming chairs</li>
              </ul>
            </div>
          </div>
          <div className="product-box">
            <div className="content">
              {Productdetails.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img-box">
                        <img src={curElm.Img} alt={curElm.Title} />
                        <div className="detail">
                          <p>{curElm.Cat}</p>
                          <h3>{curElm.Title}</h3>
                          <p>{curElm.Price}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
