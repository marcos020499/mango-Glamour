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
  font-size: 30px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 6vw;
    display: flex;
    justify-content: center;
  }
`;
export const H3 = styled.h3`
  color: black;
  text-align: center;
  font-size: 18px;
`;
export const P = styled.p`
  color: black;
  line-height: 30px;
  letter-spacing: 0.5px;
  font-weight: 100;
  text-align: center;
  font-size: 17px;
`;
export const Image = styled.li`
  margin: 0 2vw 0 2vw;
  color: black;
  &:hover {
    color: rgb(45, 2, 113);
  }
`;
export const A = styled(Link)`
  font-size: 22px;
  @media screen and (max-width: 768px) {
    font-size: 6vw;
    justify-content: space-between;
  }
`;
export const Right = styled.h4`
  font-size: 2vw;
  display: flex;
  justify-content: center;
  color:gold;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    text-align: center;
    padding-bottom: 10px;
  }
`;
export const ImageContainer = styled.div`
display: flex;
margin: auto;
justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
