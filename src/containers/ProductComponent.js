import React from "react";
import { useSelector } from "react-redux";
import "./ProductComponent.css"
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      
        <div className="cards-col" key={id}>
            <Link to={`/product/${id}`}>
          <div className="cards-link ">
            <div className="card">
              <div className="card-img ">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      
    );
  });
  // const {id,title}=products[0];
  return <>{renderList}</>;
};
export default ProductComponent;
