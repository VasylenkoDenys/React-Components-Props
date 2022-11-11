import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const product = {
  productName: "Happy Dog",
  productDescription: "Dry food for dogs",
  price: 1500,
  availability: 0,
};

function Section(props) {
  const {product: {productName='Test Name', productDescription='test description', price='test price', availability}} = props;
  return (
  <>
    <p>Product name is: {productName}</p>
    <p>Product description: {productDescription}</p>
    <p>Price: {price}</p>
    <p>Product {availability > 0 ? 'in':'out of'} stock</p>
  </>);
}


root.render(<Section product={product}/>)