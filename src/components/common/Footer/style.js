import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerFooter = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;
export const Section = styled.div`
  margin: 2vw;
  width: 90%;
  @media screen and (max-width: 768px) {
    margin: 6vw;
  }
`;
export const Titles = styled.h2`
  color: black;
  font-size: 3vw;
  @media screen and (max-width: 768px) {
    font-size: 6vw;
    display: flex;
    justify-content: center;
  }
`;
export const H3 = styled.h3`
  color: black;
  font-size: 1.8vw;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    display: flex;
    justify-content: center;
  }
`;
export const P = styled.p`
  color: black;
  font-size: 1.6vw;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    display: flex;
    justify-content: center;
    text-align: justify;
  }
`;
export const Image = styled.li`
  margin: 0 5vw 0 0;
  color: black;
  &:hover {
    color: rgb(45, 2, 113);
  }
`;
export const A = styled(Link)`
  font-size: 2.4vw;
  @media screen and (max-width: 768px) {
    font-size: 6vw;
    justify-content: space-between;
  }
`;
export const Right = styled.h4`
  font-size: 2vw;
  display: flex;
  justify-content: center;
  color: #ccff00;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    text-align: center;
    padding-bottom: 10px;
  }
`;
export const ImageContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
