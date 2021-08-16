import styled from "styled-components";
export const Title = styled.h1`
  text-align: center;
  font-size: 2vw;
  @media screen and (max-width: 768px) {
    color: white;
    font-size: 4.5vw;
  }
`;
export const ContainerContact = styled.div`
  border: 3px solid #572364;
  margin: 1vw 15vw 1vw 15vw;
  padding: 0vw 3vw 0vw 3vw;
  font-size: 1.8vw;
  color: white;
  @media screen and (max-width: 768px) {
    margin: 1vw 5vw 1vw 5vw;
    font-size: 3.4vw;
  }
`;
export const Input = styled.input`
  font-size: 1.5vw;
  padding: 0.7vw 42vw 0.7vw 2vw;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
export const InputMessage = styled.input`
  font-size: 1.5vw;
  padding: 0.7vw 42vw 10vw 2vw;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
export const Button = styled.button`
  font-size: 2.1vw;
  background: white;
  color: gray;
  padding: 1vw;
  border: 1px solid black;
  &:hover {
    background-color: purple;
    color: white;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5vw;
    font-size: 4vw;
  }
`;
