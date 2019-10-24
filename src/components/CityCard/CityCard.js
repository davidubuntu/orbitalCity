import React from "react"
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
  onHandleChange,
  edition,
  onDelete,
  checked
}) => {
  const handleChange = e => {
    onHandleChange(id, !checked)
  }

  const deleteCard = e => {
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
            value={checked}
            onChange={handleChange}
            checked={checked}
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
