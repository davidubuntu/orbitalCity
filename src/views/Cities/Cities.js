import React, { useEffect, useState } from "react"
import citiesService from "../../api/citiesService"
import CityList from "../../components/CityList/CityList"
import CityListSelected from "../../components/CityListSelected/CityListSelected"
import { CitiesContainer, Title } from "./style.js"

const Cities = () => {
  const [cities, setCities] = useState([])
  const [citySearch, setCitySearch] = useState("")
  const [allChecked, setAllChecked] = useState(false)
  //   const [loadMore, setLoadMore] = useState(true)

  useEffect(() => {
    const newCities = citiesService.cities.map(city => ({
      ...city,
      checked: false
    }))
    setCities(newCities)
  }, [])

  /*   useEffect(() => {
    const getCitiesData = load => {
      if (load) {
        const citiesOriginal = citiesService.cities.map(city => ({
          ...city,
          checked: false
        }))
        const newCitiesScroll = citiesOriginal.slice(
          cities.lenght,
          cities.length + 20
        )
        setCities([...cities, ...newCitiesScroll])
      }
    }
    getCitiesData(loadMore)
    setLoadMore(false)
  }, [cities, loadMore])

  useEffect(() => {
    const list = document.getElementsByClassName("list")[0]
    // list has fixed height
    list.addEventListener("scroll", e => {
      const el = e.target
      if (el.scrollTop + el.clientHeight === el.scrollHeight) {
        setLoadMore(true)
      }
    })
  }, [])
  useEffect(() => {
    const list = document.getElementsByClassName("list")[0]

    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true)
    }
  }, [cities]) */

  const checkAllTrue = checkAll => {
    const newCities = citiesService.cities.map(city => ({
      ...city,
      checked: checkAll
    }))
    setCities(newCities)
    setAllChecked(checkAll)
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
  //Set all items with check true
  const clearSelectedList = () => {
    const newCities = cities.map(city => ({
      ...city,
      checked: false
    }))
    setCities(newCities)
    setAllChecked(false)
  }

  console.log(cities, filteredCites)
  return (
    <div>
      <Title>Cities of China</Title>
      <div className="content">
        <div className="content--inner">
          <CitiesContainer>
            <CityList
              cities={filteredCites}
              total={filteredCites.length}
              handleChangeSelection={handleChangeSelection}
              selectAll={checkAllTrue}
              searchCity={searchCity}
              allChecked={allChecked}
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
