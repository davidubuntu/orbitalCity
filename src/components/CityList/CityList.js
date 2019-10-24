import React from "react"
import {
  CityListContainer,
  TotalDiv,
  FilterDiv,
  Check,
  SearchCityInput,
  SearchContainer,
  Items
} from "./style"
import CityCard from "../CityCard/CityCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

  return (
    <>
      <CityListContainer>
        <FilterDiv className="padd">
          <SearchContainer>
            <FontAwesomeIcon className="icon-search" icon="search" />
            <SearchCityInput
              placeholder="Search by Name"
              type="text"
              onChange={changeCity}
            />
          </SearchContainer>
        </FilterDiv>
        <TotalDiv className="padd">
          <label className="container">
            <Check type="checkbox" onChange={handleTotalChange} />
            <span className="checkmark"></span>
          </label>
          <Items> {total}items</Items>
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
