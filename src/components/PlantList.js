import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plantList }) {
  
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      { plantList.map((plant) => {
        return (
          <PlantCard 
            key={plant.id} 
            plant={plant}/> 
        )
      }
      )}
    </ul>
  );
};

export default PlantList;
