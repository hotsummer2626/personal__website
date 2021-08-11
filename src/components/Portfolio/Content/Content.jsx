import React from "react";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonIcon } from "../../../pages/Button";

const Container = styled.div`
  width: calc(100vw - 4rem);
  padding: 0 1.5rem;
  display: grid;
  row-gap: 1.5rem;
  justify-items: center;
`;

const Img = styled.img`
  width: 265px;
  border-radius: 0.5rem;
`;

const Data = styled.div`
  width: 265px;
`;

const Title = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
`;

const Description = styled.p`
  margin-bottom: var(--mb-0-75);
`;

const PortfolioButton = styled(Button)`
  cursor: pointer;
  &:hover ${ButtonIcon} {
    transform: translateX(0.25rem);
  }
`;

const Content = ({ img, title, description }) => {
  return (
    <Container>
      <Img src={img} />
      <Data>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PortfolioButton
          flex={true}
          small={true}
          icon={faArrowRight}
          iconsize=".6rem"
        >
          Demo
        </PortfolioButton>
      </Data>
    </Container>
  );
};

export default Content;
