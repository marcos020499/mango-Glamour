import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import {
  ContainerFooter,
  Section,
  Titles,
  P,
  ImageContainer,
  A,
  Image,
  H3,
  Right,
} from "./style";
const index = () => {
  return (
    <>
      <ContainerFooter>
        <Section>
          <Titles>About Us</Titles>
          <P>
            Curabitur non nulla sit amet nislinit tempus convallis quis ac
            lectus. lac inia eget consectetur sed, convallis at tellus. Nulla
            porttitor accumsana tincidunt.
          </P>
        </Section>
        <Section>
          <Titles>Contact Us</Titles>
          <ImageContainer>
            <A href="/">
              <Image className="fa fa-facebook"></Image>
            </A>
            <A href="/">
              <Image className="fa fa-google"></Image>
            </A>
            <A href="/">
              <Image className="fa fa-instagram"></Image>
            </A>
            <A href="/">
              <Image className="fa fa-linkedin"></Image>
            </A>
          </ImageContainer>
        </Section>
        <Section>
          <Titles>Get in touch</Titles>
          <H3>Location :</H3>
          <H3>0926k 4th block building, king Avenue, New York City.</H3>
          <H3>Contact :</H3>
          <H3>Phone : +121 098 8907 9987</H3>
          <H3>Email : info@example.com</H3>
        </Section>
      </ContainerFooter>
      <Right>
        © 2021 Marcos shoes. All Rights Reserved | Design by Marcos Manzo Torres
      </Right>
    </>
  );
};
export default index;
