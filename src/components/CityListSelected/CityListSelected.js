import React from "react"
import { CityListSelectedContainer } from "./style"
import CityCard from "../CityCard/CityCard"
const CityListSelected = ({ cities, deleteItem }) => {
  const deleteCard = id => {
    deleteItem(id)
  }
  return (
    <>
      <CityListSelectedContainer>
        <h2>Cities Selected</h2>
        {cities.map(city => (
          <CityCard
            key={city.id}
            id={city.id}
            name={city.name}
            chineseName={city.chineseName}
            edition={true}
            onDelete={deleteCard}
          />
        ))}
      </CityListSelectedContainer>
    </>
  )
}

export default CityListSelected
