import React, { Component } from "react";
import styled from "styled-components";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import { skillsTable } from "../../displayInformation";
import SkillsContent from "./SkillsContent";

const SkillsContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;
  row-gap: 0;
`;

export default class Skills extends Component {
  state = { currentShowSkill: "" };

  handleCurrentShowSkillChange = (skillTitle) => {
    const { currentShowSkill } = this.state;
    const newCurrenShowSkill =
      currentShowSkill === skillTitle ? "" : skillTitle;
    this.setState({ currentShowSkill: newCurrenShowSkill });
  };

  render() {
    return (
      <Section title="Skills" subtitle="My technical level" id="skills">
        <SkillsContainer>
          {skillsTable.map((skill) => (
            <SkillsContent
              key={skill.title}
              skill={skill}
              currentShowSkill={this.state.currentShowSkill}
              handleCurrentShowSkillChange={this.handleCurrentShowSkillChange}
            />
          ))}
        </SkillsContainer>
      </Section>
    );
  }
}
