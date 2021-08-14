import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../../pages/Container";
import Social from "./Social";
import Img from "../../pages/Img";
import Data from "./Data";
import { mediaQueries } from "../../mediaQueries";

const Section = styled.section`
  padding: 2rem 0 4rem;
`;

const HomeContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;

  ${mediaQueries("md")`
    row-gap: 5rem;
  `}
`;

const Content = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;

  ${mediaQueries("sm")`
    grid-template-columns: max-content 1fr 1fr;
  `}

  ${mediaQueries("md")`
    padding-top: 5.5rem;
    column-gap: 2rem;
  `}
`;

const ScrollButtonContainer = styled.div`
  display: none;

  ${mediaQueries("md")`
    display: block;
  `}
`;

const ScrollButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--first-color);
  transition: 0.3s;
  &:hover {
    transform: translateY(0.25rem);
  }

  ${mediaQueries("md")`
    margin-left: 3rem;
  `}
`;

const ScrollButtonName = styled.span`
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  margin-right: var(--mb-1);
`;

const Home = React.forwardRef((props, ref) => {
  return (
    <Section id="home" ref={ref}>
      <HomeContainer>
        <Content>
          <Social />
          <Img />
          <Data />
        </Content>
        <ScrollButtonContainer>
          <ScrollButton href="#about">
            <FontAwesomeIcon icon={faMouse} />
            &nbsp;&nbsp;
            <ScrollButtonName>Scroll down</ScrollButtonName>
            <FontAwesomeIcon icon={faArrowDown} />
          </ScrollButton>
        </ScrollButtonContainer>
      </HomeContainer>
    </Section>
  );
});

export default Home;
