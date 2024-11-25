import React, { useState } from "react";
import "./AddProduct.css";
import { Link } from "react-router-dom";

export default function AddProduct() {

const [newProduct, setNewProduct] = useState({
  name: "",
  price: "",
  image: "",
})

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(newProduct);
  
  try {
    const response = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
    });
    if (response.ok) {
      alert("Product created successfully");
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
    } else {
      alert("Product creation failed");
    }
    
  } catch (error) {
    console.log(error);
  }
}





  return (
    <div className="outer-container-add">
      <div className="container-add">
        <div className="header-add">
          <h1>Lets Create a Product</h1>
        </div>
        <div className="input-cont-1">
          <label htmlFor="">Product Name:</label>
          <input type="text"  value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        </div>
        <div className="input-cont-2">
          <label htmlFor="">Product Price:</label>
          <input type="text" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        </div>
        <div className="input-cont-3">
          <label htmlFor="">Product Image:</label>
          <input type="text" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
        </div>
        <div className="buttons-cont">
          <div className="create-refresh-cont">
          <button onClick={handleSubmit}>Create</button>
          <button onClick={() => setNewProduct({ name: "", price: "", image: "" })}>Refresh</button>
          </div>
          <div className="go-back-cont">
          <button ><Link navigate to="/" className="go-back-link">Go Back to Homepage</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}
