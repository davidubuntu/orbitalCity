import styled from "styled-components"

export const CardContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  :hover {
    background: #efefef;
  }
  .icon-delete {
    color: #6f6f6f;
    font-size: 2em;
    margin-left: auto;
  }

  /* Checkbox styles */
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
export const NamesDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const Name = styled.span`
  height: 40px;
  width: 100%;
`
export const ChineseName = styled.span`
  height: 40px;
  width: 100%;
`
export const Check = styled.input``
export const Image = styled.img`
  width: 4em;
  object-fit: cover;
  margin: 0px 30px;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  border-radius: 3px 0 0 3px;
  &:hover {
    opacity: 0.7;
    transform: scale(1.03);
    box-shadow: 5px 10px 18px rgb(255, 8, 120);
    background: #ffebf2;
  }
  transition: all 0.1s ease-in-out;
  border-radius: 3px 0 0 3px;
  @media screen and (max-width: 767px) {
    border-radius: 3px 3px 0 0;
    margin: 20px;
  }
`
