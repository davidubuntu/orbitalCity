import styled from "styled-components"

export const CityListSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  @media screen and (max-width: 1200px) {
    padding: 16px;
  }
`
export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-left: 0;
`
export const TotalDiv = styled.div`
  height: 40px;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
`
export const FilterDiv = styled.div`
  height: 40px;
  border: 1px solid #e0e0e0;
`
export const Title = styled.h4`
  text-align: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
`

export const Check = styled.input``

export const ClearButton = styled.a`
  font-family: "Rubik-Bold";
  color: #2196f3;
`
export const ItemsNumber = styled.span`
  font-family: "Rubik-Bold";
  margin: 0px 30px;
  color: #a9a7a7;
`
export const CitiesListScroll = styled.div`
  height: calc(100vh - 164px);
  overflow: scroll;
`
