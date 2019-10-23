import React, { useState, useEffect } from "react"
import {
  Check,
  Image,
  Name,
  ChineseName,
  CardContainer,
  NamesDiv
} from "./style"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const CityCard = ({
  id,
  name,
  chineseName,
  allSelected,
  onHandleChange,
  edition,
  onDelete
}) => {
  const [selected, setSelected] = useState(false)
  const handleChange = e => {
    onHandleChange(id, !selected)
    setSelected(!selected)
  }

  useEffect(() => {
    // if (allSelected) {
    //   document.querySelector(`#${id}`).click()
    //   setSelected(true)
    // } else {
    //   document.querySelector(`#${id}`).checked = false
    //   document.querySelector(`#${id}`).value = false
    // }
  }, [allSelected])
  const deleteCard = () => {
    onDelete(id)
  }

  return (
    <CardContainer>
      {!edition && (
        <label className="container">
          <Check
            id={id}
            type="checkbox"
            className="input-card"
            value={selected}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
      )}
      <Image src={"./images/city.png"} />
      <NamesDiv>
        <Name>{name}</Name>
        <ChineseName>{chineseName}</ChineseName>
      </NamesDiv>
      {edition && <input type="button" value="X" onClick={deleteCard} />}
    </CardContainer>
  )
}
export default CityCard
