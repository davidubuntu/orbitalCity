import styled from "styled-components"

export const CityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  border: 1px solid #e0e0e0;
  @media screen and (max-width: 1200px) {
    padding: 16px;
  }
`
export const TotalDiv = styled.div`
  height: 40px;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  /* Checkbox styles */
  /* The container */
  .container {
    display: block;
    position: relative;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2px solid #797979;
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
    border: 2px solid #0099fb;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
export const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid #e2e2e2;
`

export const Check = styled.input``
export const SearchCityInput = styled.input`
  :focus {
    outline: none;
  }
  border: 0;
  width: 100%;
  border-bottom: 1px solid #6f6f6f;
`
export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  .icon-search {
    border-bottom: 1px solid #6f6f6f;
  }
`

export const Items = styled.span`
  margin: 0px 65px;
  color: #7b7b7b;
  font-weight: 500;
`
