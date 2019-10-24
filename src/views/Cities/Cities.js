import React, { useEffect, useState } from "react"
import citiesService from "../../api/citiesService"
import CityList from "../../components/CityList/CityList"
import CityListSelected from "../../components/CityListSelected/CityListSelected"
import { CitiesContainer } from "./style.js"

const Cities = () => {
  const [cities, setCities] = useState([])
  const [citySearch, setCitySearch] = useState("")

  useEffect(() => {
    const newCities = citiesService.cities.map(city => ({
      ...city,
      checked: false
    }))
    setCities(newCities)
  }, [])

  const checkAllTrue = checkAll => {
    debugger
    const newCities = citiesService.cities.map(city => ({
      ...city,
      checked: checkAll
    }))
    setCities(newCities)
  }

  const editSelection = (id, checked) => {
    const indexSelected = cities.findIndex(city => city.id === id)
    const citySelected = cities.find(city => city.id === id)
    const newCity = {
      ...citySelected,
      checked: checked
    }
    const newCitiesSelected = [
      ...cities.slice(0, indexSelected),
      newCity,
      ...cities.slice(indexSelected + 1)
    ]
    console.log(checked, id, newCity, newCitiesSelected)
    setCities(newCitiesSelected)
  }

  const handleChangeSelection = (id, checked) => {
    editSelection(id, checked)
  }

  const deleteCityCard = id => {
    editSelection(id, false)
  }

  const searchCity = cityValue => {
    setCitySearch(cityValue)
  }
  const filter = list => {
    if (citySearch === "") {
      return cities
    }
    const filteredList = cities.filter(city => {
      return city.name.toUpperCase().includes(citySearch.toUpperCase())
    })
    return filteredList
  }

  //Filter Original Cities Array
  const filteredCites = filter(cities)
  const totalFilteredCities = filteredCites.reduce(
    (accumulator, currentCity) => {
      if (currentCity.checked) {
        accumulator += 1
      }
      return accumulator
    },
    0
  )
  const clearSelectedList = () => {
    const newCities = cities.map(city => ({
      ...city,
      checked: false
    }))
    setCities(newCities)
  }
  return (
    <div>
      <h1>Cities of China</h1>
      <div className="content">
        <div className="content--inner">
          <CitiesContainer>
            <CityList
              cities={filteredCites}
              total={filteredCites.length}
              handleChangeSelection={handleChangeSelection}
              selectAll={checkAllTrue}
              searchCity={searchCity}
            />
            <CityListSelected
              cities={filteredCites}
              deleteItem={deleteCityCard}
              totalCitiesFiltered={totalFilteredCities}
              clearSelectedList={clearSelectedList}
            />
          </CitiesContainer>
        </div>
      </div>
    </div>
  )
}

export default Cities
