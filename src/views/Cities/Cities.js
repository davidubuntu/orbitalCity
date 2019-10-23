import React, { useEffect, useState } from "react"
import citiesService from "../../api/citiesService"
import CityList from "../../components/CityList/CityList"
import CityListSelected from "../../components/CityListSelected/CityListSelected"
import { CitiesContainer } from "./style.js"

const Cities = () => {
  const [cities, setCities] = useState([])
  const [citiesSelected, setCitiesSelected] = useState([])

  useEffect(() => {
    const newCities = citiesService.cities.map(city => ({
      ...city,
      checked: false
    }))
    setCities(newCities)
  }, [])

  const handleChangeSelection = (id, selected) => {
    if (!selected) {
      const newCitiesSelected = citiesSelected.filter(c => {
        return c.id !== id
      })
      setCitiesSelected(newCitiesSelected)
    } else {
      const selectedCity = cities.find(c => {
        return c.id === id
      })
      setCitiesSelected([...citiesSelected, selectedCity])
    }
  }

  const deleteCityCard = id => {
    const newCitiesSelected = citiesSelected.filter(c => {
      return c.id !== id
    })
    setCitiesSelected(newCitiesSelected)
    console.log(id)
  }

  return (
    <div>
      <h1>Cities of China</h1>
      <div className="content">
        <div className="content--inner">
          <CitiesContainer>
            <CityList
              cities={cities}
              total={cities.length}
              handleChangeSelection={handleChangeSelection}
            />
            <CityListSelected
              cities={citiesSelected}
              deleteItem={deleteCityCard}
            />
          </CitiesContainer>
        </div>
      </div>
    </div>
  )
}

export default Cities
