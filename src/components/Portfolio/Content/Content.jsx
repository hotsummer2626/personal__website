import React from "react";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonIcon } from "../../../pages/Button";
import { mediaQueries } from "../../../mediaQueries";

const Container = styled.div`
  width: calc(100vw - 2.5rem);
  padding: 0 1.5rem;
  display: grid;
  row-gap: 1.5rem;
  justify-items: center;

  ${mediaQueries("sm")`
    width: calc(100vw - 3.5rem);
    grid-template-columns: repeat(2,1fr);
    column-gap: 1.5rem;
  `}

  ${mediaQueries("md")`
    width: 768px;
    align-items: center;
  `}
`;

const Img = styled.img`
  width: 265px;
  border-radius: 0.5rem;

  ${mediaQueries("md")`
    width: 320px;
  `}
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
          iconsize=".8rem"
        >
          Demo
        </PortfolioButton>
      </Data>
    </Container>
  );
};

export default Content;
