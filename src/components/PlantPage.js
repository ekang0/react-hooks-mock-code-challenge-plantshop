import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() =>{
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => {
      setPlantList(data)
    });
  }, []);

  function addPlant(newPlant){
    const updatedPlantList = [...plantList, newPlant];
    setPlantList(updatedPlantList)
  };

  /*
  function onSearchPlant(searchValue) {
    console.log(searchValue);
    const displayFilteredPlants = plantList.filter((plant) => {
      return plant.name.toLowerCase().includes(searchValue.toLowerCase())
    });
    setPlantList(displayFilteredPlants)
  };
  // added useState searchTerm and changed props in search from onSearchPlant={onSearchPlant} to searchTerm and added const displayPlants below. searchTerm was in Search component at first but moved to here and passed as props. 
*/

  const displayPlants = plantList.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <PlantList plantList={displayPlants}/>
    </main>
  );
}

export default PlantPage;
