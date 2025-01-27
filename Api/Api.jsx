import React, { useState } from "react";

const Api = () => {
  const [products, setProducts] = useState([]);
  let dataFetch = async () => {
    try {
      let res = await fetch("https://api.escuelajs.co/api/v1/products");
      let data = await res.json();
      console.log(data);

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  dataFetch();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
      {products.map((value) => {
        return (
          <div>
            <img
              src={value.image}
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
            <h6>{value.title}</h6>
            <h2>{value.price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
