import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { mediaQueries } from "../../../../mediaQueries";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  opacity: 1;
  visibility: visible;
  transition: 0.3s;
  ${({ isModalShow }) =>
    isModalShow
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`;

const Content = styled.div`
  position: relative;
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: 0.5rem;

  ${mediaQueries("md")`
    width: 450px;
  `}
`;

const Title = styled.h4`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1-5);
`;

const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
`;

const Services = styled.ul`
  display: grid;
  row-gap: 1rem;
`;

const Service = styled.li`
  display: flex;
  align-items: center;
`;

const Description = styled.p``;

const ModalIcon = styled(FontAwesomeIcon)`
  color: var(--first-color);
  margin-right: var(--mb-0-25);
`;

const Modal = ({ isModalShow, handleIsModalShowChange }) => {
  return (
    <Container isModalShow={isModalShow}>
      <Content>
        <Title>
          Ui/Ux <br /> Designer
        </Title>
        <CloseIcon icon={faTimes} onClick={handleIsModalShowChange} />

        <Services>
          <Service>
            <ModalIcon icon={faCheckCircle} />
            <Description>I develop the user interface</Description>
          </Service>
          <Service>
            <ModalIcon icon={faCheckCircle} />
            <Description>I develop the user interface</Description>
          </Service>
          <Service>
            <ModalIcon icon={faCheckCircle} />
            <Description>I develop the user interface</Description>
          </Service>
          <Service>
            <ModalIcon icon={faCheckCircle} />
            <Description>I develop the user interface</Description>
          </Service>
        </Services>
      </Content>
    </Container>
  );
};

export default Modal;
