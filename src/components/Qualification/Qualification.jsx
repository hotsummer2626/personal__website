import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import EducationContent from "./EducationContent";
import WorkContent from "./WorkContent";

const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2);
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
`;

export default class Qualification extends Component {
  state = {
    currentShowQualification: "Education",
  };

  handleCurrentShowQualificationChange = (qualificationType) => {
    this.setState({ currentShowQualification: qualificationType });
  };

  render() {
    const qualificationsTable = [
      { type: "Education", icon: faGraduationCap },
      { type: "Work", icon: faBriefcase },
    ];
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

          <EducationContent
            qulificationType={qualificationsTable[0].type}
            currentShowQualification={currentShowQualification}
          />
          <WorkContent
            qulificationType={qualificationsTable[1].type}
            currentShowQualification={currentShowQualification}
          />
        </Container>
      </Section>
    );
  }
}
