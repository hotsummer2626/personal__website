import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 2rem 0 4rem;
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
`;

const Section = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default Section;
