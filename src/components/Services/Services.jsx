import React, { Component } from "react";
import styled from "styled-components";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import Content from "./Content";

const ServicesContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
`;

export default class Services extends Component {
  render() {
    return (
      <Section title="Services" subtitle="What i offer" id="services">
        <ServicesContainer>
          <Content />
          <Content />
        </ServicesContainer>
      </Section>
    );
  }
}
