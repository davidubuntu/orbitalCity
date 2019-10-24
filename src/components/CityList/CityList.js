import React from "react"
import { CityListContainer, TotalDiv, FilterDiv, Check } from "./style"
import CityCard from "../CityCard/CityCard"
const CityList = ({
  cities,
  total,
  handleChangeSelection,
  selectAll,
  searchCity
}) => {
  const handleTotalChange = e => {
    const checked = e.target.checked
    selectAll(checked)
  }
  const handleSelection = (id, selected) => {
    handleChangeSelection(id, selected)
  }
  const changeCity = e => {
    searchCity(e.target.value)
  }
  //   {cities.filter(city =>city.name.includes(value) map(city => (
  return (
    <>
      <CityListContainer>
        <FilterDiv>
          <input type="text" onChange={changeCity} />
        </FilterDiv>
        <TotalDiv>
          <label className="container">
            <Check type="checkbox" onChange={handleTotalChange} />
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
            onHandleChange={handleSelection}
            checked={city.checked}
          />
        ))}
      </CityListContainer>
    </>
  )
}

export default CityList
