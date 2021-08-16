import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { mediaQueries } from "../../mediaQueries";

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
const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
`;

const Modal = ({ isModalShow, handleIsModalShowChange,children }) => {
  return (
    <Container isModalShow={isModalShow}>
      <Content>
        <CloseIcon icon={faTimes} onClick={handleIsModalShowChange} />
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
