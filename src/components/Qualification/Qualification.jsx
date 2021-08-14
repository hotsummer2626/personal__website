import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import Content from "./Content";
import { qualificationsTable } from "../../displayInformation";
import { mediaQueries } from "../../mediaQueries";

const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2);

  ${mediaQueries("md")`
    justify-content: center;
  `}
`;

const QualificationButton = styled.div`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  color: ${({ qulificationType, currentShowQualification }) => {
    const requiredColor =
      currentShowQualification === qulificationType ? "var(--first-color)" : "";
    return requiredColor;
  }};
  &:hover {
    color: var(--first-color);
  }

  ${mediaQueries("md")`
    margin: 0 var(--mb-1);
  `}
`;

const ContentContainer = styled.div`
  ${mediaQueries("sm")`
    display: grid;
    grid-template-columns: .6fr;
    justify-content: center;
  `}

  ${mediaQueries("md")`
    grid-template-columns: 0.5fr;
  `}
`;

export default class Qualification extends Component {
  state = {
    currentShowQualification: "Education",
  };

  handleCurrentShowQualificationChange = (qualificationType) => {
    this.setState({ currentShowQualification: qualificationType });
  };

  render() {
    const { currentShowQualification } = this.state;
    return (
      <Section title="Qualification" subtitle="My personal journey" id="">
        <Container>
          <Tabs>
            {qualificationsTable.map((qualification) => (
              <QualificationButton
                key={qualification.type}
                qulificationType={qualification.type}
                currentShowQualification={currentShowQualification}
                onClick={() => {
                  this.handleCurrentShowQualificationChange(qualification.type);
                }}
              >
                <FontAwesomeIcon icon={qualification.icon} />
                &nbsp; {qualification.type}
              </QualificationButton>
            ))}
          </Tabs>
          <ContentContainer>
            {qualificationsTable.map((qualification) => (
              <Content
                key={qualification.type}
                qualification={qualification}
                currentShowQualification={currentShowQualification}
              />
            ))}
          </ContentContainer>
        </Container>
      </Section>
    );
  }
}
