import React from "react"
import { CityListSelectedContainer, TopDiv, ClearButton } from "./style"
import CityCard from "../CityCard/CityCard"

const CityListSelected = ({
  cities,
  deleteItem,
  totalCitiesFiltered,
  clearSelectedList
}) => {
  const deleteCard = id => {
    deleteItem(id)
  }
  const clearList = () => {
    clearSelectedList()
  }
  return (
    <>
      <CityListSelectedContainer>
        <TopDiv>
          <h3>{totalCitiesFiltered} items</h3>{" "}
          <ClearButton onClick={clearList}>CLEAR</ClearButton>
        </TopDiv>
        {cities.map(city => {
          if (!city.checked) return <div key={city.id}></div>
          return (
            <CityCard
              key={city.id}
              id={city.id}
              name={city.name}
              chineseName={city.chineseName}
              edition={true}
              onDelete={deleteCard}
            />
          )
        })}
      </CityListSelectedContainer>
    </>
  )
}

export default CityListSelected
