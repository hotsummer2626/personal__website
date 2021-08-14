import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../mediaQueries";

const Container = styled.section`
  padding: 2rem 0 4rem;

  ${mediaQueries("md")`
    padding: 6rem 0 2rem;
  `}
`;

const Title = styled.h2`
  font-size: var(--h1-font-size);
  text-align: center;
`;

const Subtitle = styled.span`
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);
  text-align: center;

  ${mediaQueries("md")`
    margin-bottom: 4rem;
  `}
`;

const Section = React.forwardRef(({ title, subtitle, id, children }, ref) => {
  return (
    <Container id={id} ref={ref}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  );
});

export default Section;
