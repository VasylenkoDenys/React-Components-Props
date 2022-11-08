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
  availability: 3,
};

function Section(props) {
  const { productName, productDescription, price, availability} = product;
  if (availability > 0){
    return (
      <>
        <p>Product name is: {productName || 'Test Name'}</p>
        <p>Product description: {productDescription || 'test description'}</p>
        <p>Price: {price || 'test price'}</p>
        <p>Product in stock</p>
    </>
  );
}
return (
  <>
    <p>Product name is: {productName}</p>
    <p>Product description: {productDescription}</p>
    <p>Price: {price}</p>
    <p>Product out of stock</p>
</>);
}


root.render(<Section/>);
