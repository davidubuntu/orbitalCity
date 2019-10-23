import React, { useState } from "react"
import { CityListContainer, TotalDiv, FilterDiv, Check } from "./style"
import CityCard from "../CityCard/CityCard"
const CityList = ({ cities, total, handleChangeSelection }) => {
  const [allSelected, setAllSelected] = useState(false)
  const handleChange = e => {
    setAllSelected(!allSelected)
  }
  const handleSelection = (id, selected) => {
    handleChangeSelection(id, selected)
  }

  return (
    <>
      <CityListContainer>
        <FilterDiv></FilterDiv>
        <TotalDiv>
          <label className="container">
            <Check
              type="checkbox"
              value={allSelected}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <h4> {total}items</h4>
        </TotalDiv>
        {cities.map(city => (
          <CityCard
            key={city.id}
            id={city.id}
            name={city.name}
            chineseName={city.chineseName}
            allSelected={allSelected}
            onHandleChange={handleSelection}
          />
        ))}
      </CityListContainer>
    </>
  )
}

export default CityList
