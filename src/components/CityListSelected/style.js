import styled from "styled-components"

export const CityListSelectedContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 1200px) {
    padding: 16px;
  }
`
export const TotalDiv = styled.div`
  height: 80px;
  width: 100%;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  padding: 1em;
  /* Checkbox styles */
  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
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
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
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
  height: 80px;
  width: 100%;
  border: 1px solid #e0e0e0;
`
export const Title = styled.h4`
  text-align: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
`

export const Check = styled.input``
