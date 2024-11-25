import React, { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import GlobalContext from "../../GlobalContext";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoColorFill } from "react-icons/io5";

export default function Homepage() {
  const { products, setProducts } = useContext(GlobalContext);
  const [refresh, setRefresh] = useState(false);


  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",  
    image: "",
  });

  


  const handleDelete = async (id) => {
    



    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
         
      })
      if(response.ok) {
        alert("Product deleted successfully")
        setProducts(products.filter((product) => product.id !== id))
        setRefresh(prev => !prev);
      }
      
      
    } catch (error) {
      
    }
  }

  useEffect (() => {
    fetch("/api/products")
    .then((res) => res.json())
    .then((data) =>  { 
      setProducts(data.products);
      console.log(data.products, "data fetched") 
    });
    
  }, [refresh]);

  return (
    <div className="outer-container">
      <div className="container">
        {products.map((product) => (
          <div className="product" key={product._id}>
            <div className="image-container">
              <img className="image" src={product.image}></img>
            </div>
            <div className="details-container">
              <div className="details-name-and-price">
                <span className="details-name"> {product.name}</span>
                <span className="details-price">${product.price}</span>
              </div>
              <div className="details-buttons">
                <Link className="link" to={`product-detail/${product._id}`}>
                <FaEdit color="black" style={{cursor: "pointer", textDecoration: "none"}} size={25} />
                </Link>
                <MdDeleteForever style={{cursor: "pointer"}} onClick={() => handleDelete(product._id)} size={25} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
