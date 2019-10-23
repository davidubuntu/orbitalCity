import React, { useState, createContext } from "react"
import PropTypes from "prop-types"

export const CitiesContext = createContext({ cities: [] })

const CitiesProvider = props => {
  const [cities, setCities] = useState([])

  return (
    <CitiesContext.Provider value={{ cities, setCities }}>
      {props.children}
    </CitiesContext.Provider>
  )
}

CitiesProvider.propTypes = {
  defaultOpen: PropTypes.array
}

export { CitiesProvider }
