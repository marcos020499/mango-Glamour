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
          <Titles>Sobre Nosotros</Titles>
          <P>
            Curabitur non nulla sit amet nislinit tempus convallis quis ac
            lectus. lac inia eget consectetur sed, convallis at tellus. Nulla
            porttitor accumsana tincidunt.
          </P>
        </Section>
        <Section>
          <Titles>Contacto</Titles>
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
          <Titles>Mantente en contacto</Titles>
          <H3>Direccion: </H3>
          <H3>Tlajomulco de Zuñiga, Jalisco, México</H3>
          <H3>Contacto :</H3>
          <H3>Telefono : +52 3326704013</H3>
          <H3>Email : alondra.cantor@hotmail.com</H3>
        </Section>
      </ContainerFooter>
      <Right>
        © 2021 Mango Glamour. Todos los derechos reservados
      </Right>
    </>
  );
};
export default index;
