import React, { useState } from "react";

function PlantCard( { plant }) {
  //note - destructure as an object not an array
  const { name, image, price } = plant;
  //console.log(name, image, price)
  const [isStock, setIsStock] = useState(true);

  function stockChange() {
    //console.log("stock button works");
    setIsStock(!isStock);
  };

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStock ? (
        <button className="primary" onClick={stockChange}>In Stock</button>
      ) : (
        <button onClick={stockChange}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
