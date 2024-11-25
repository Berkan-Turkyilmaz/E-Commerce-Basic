import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

export default function ProductDetail() {
  const { id } = useParams();
  const [productToUpdate, setProductToUpdate] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductToUpdate(data.product);
        console.log(data.product, "data fetched");
      });
}, [id]);
  useEffect(() => {
    console.log(productToUpdate);
  }, [productToUpdate]);

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productToUpdate),
      });
      if (response.ok) {
        alert("Product updated successfully");
      } else {
        alert("Product creation failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-detail-outer">
    <div className="detail-container">
      <div key={productToUpdate._id} className="detail-1">
        <label htmlFor="">Product Name:</label>
        <input
          type="text"
          
          value={productToUpdate.name}
          onChange={(e) =>
            setProductToUpdate({ ...productToUpdate, name: e.target.value })
          }
        />
          
        
      </div>
      <div className="detail-2">
        <label htmlFor="">Product Price:</label>
        <input
          type="text"
          value={productToUpdate.price}
          onChange={(e) =>
            setProductToUpdate({ ...productToUpdate, price: e.target.value })
          }
        />
        
      </div>
      <div className="detail-3">
        <label htmlFor="">Product Image:</label>
        <input
          type="text"
          value={productToUpdate.image}
          onChange={(e) =>
            setProductToUpdate({ ...productToUpdate, image: e.target.value })
          }
        />
        
        
      </div>
      <div className="detail-button">
        <button onClick={() => handleUpdate(productToUpdate._id)} className="update-button">Update</button>
      </div>
    </div>
    </div>
  );
}
