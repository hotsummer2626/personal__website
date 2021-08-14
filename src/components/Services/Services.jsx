import React, { Component } from "react";
import styled from "styled-components";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import Content from "./Content";
import { mediaQueries } from "../../mediaQueries";

const ServicesContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  ${mediaQueries("md")`
    grid-template-columns: repeat(3, 218px);
    justify-content: center;
  `}

  ${mediaQueries("lg")`
    grid-template-columns: repeat(3, 238px);
  `}
`;

class ServicesComponent extends Component {
  render() {
    return (
      <Section
        title="Services"
        subtitle="What i offer"
        id="services"
        ref={this.props.forwardRef}
      >
        <ServicesContainer>
          <Content />
          <Content />
        </ServicesContainer>
      </Section>
    );
  }
}

const Services = React.forwardRef((props, ref) => {
  return <ServicesComponent forwardRef={ref} />;
});

export default Services;
