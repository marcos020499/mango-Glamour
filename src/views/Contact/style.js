import styled from "styled-components";
export const Title = styled.h1`
  text-align: center;
  font-family: 'Tajawal', Helvetica, Arial, sans-serif;
  font-size: 25px;
  @media screen and (max-width: 768px) {
    color: white;
    font-size: 4.5vw;
  }
`;
export const ContainerContact = styled.div`
  border: 2px solid gold;
  margin: 7vw 15vw 1vw 15vw;
  padding: 0vw 3vw 0vw 3vw;
  font-family: 'Tajawal', Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: white;
  @media screen and (max-width: 768px) {
    margin: 1vw 5vw 1vw 5vw;
    font-size: 3.4vw;
  }
`;
export const Input = styled.input`
  font-size: 15px;
  padding: 0.7vw 42vw 0.7vw 2vw;
  border-radius: 5px;
  :-ms-input-placeholder{
    color: black;
  }
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
export const InputMessage = styled.input`
  font-size: 13px;
  padding: 0.7vw 42vw 10vw 2vw;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
export const Button = styled.button`
min-width: 80px;
width: auto;
height: 30px;
line-height: 30px;
font-size: 1.8vh;
background: black;
color: white;
font-weight: 1000;
border: none;
cursor: pointer;
display: flex;
margin: 15px 0 15px 0;
  &:hover {
    background-color: purple;
    color: white;
  }
`;

export const Divbutton= styled.div`
  display: flex;
  flex-direction: none;
  justify-content: center;
  margin: auto;
`