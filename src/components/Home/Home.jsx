import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../../pages/Container";
import Social from "./Social";
import Img from "../../pages/Img";
import Data from "./Data";

const Section = styled.section`
  padding: 2rem 0 4rem;
`;

const Content = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
`;

const ScrollButtonContainer = styled.div`
  display: none;
`;

const ScrollButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--first-color);
  transition: 0.3s;
  &:hover {
    transform: translateY(0.25rem);
  }
`;

const ScrollButtonName = styled.span`
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  margin-right: var(--mb-0-25);
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Content>
          <Social />
          <Img />
          <Data />
        </Content>
        <ScrollButtonContainer>
          <ScrollButton href="#about">
            <FontAwesomeIcon icon={faMouse} />
            <ScrollButtonName>Scroll down</ScrollButtonName>
            <FontAwesomeIcon icon={faArrowDown} />
          </ScrollButton>
        </ScrollButtonContainer>
      </Container>
    </Section>
  );
};

export default Home;
