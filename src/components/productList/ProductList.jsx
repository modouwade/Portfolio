import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Création et inspiration</h1>
        <p className="pl-desc">
          Création de site web et application mobile pour nos idées de projets.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
