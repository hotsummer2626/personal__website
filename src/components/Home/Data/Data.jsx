import React from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../pages/Button";
import {mediaQueries} from '../../../mediaQueries'

const Container = styled.div`
  grid-column: 1/3;

  ${mediaQueries('sm')`
    grid-column: initial;
  `}
`;

const Title = styled.h1`
  font-size: var(--big-font-size);
`;

const Subtitle = styled.h3`
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-75);
`;

const Description = styled.p`
  margin-bottom: var(--mb-2);
`;

const Data = () => {
  return (
    <Container>
      <Title>Hi, I am Sunny</Title>
      <Subtitle>Hi, I am Sunny</Subtitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatum
        provident li sunt quos, non cumque?
      </Description>
      <Button href="#contact" flex={true} icon={faEnvelope}>
        Contact Me
      </Button>
    </Container>
  );
};

export default Data;
