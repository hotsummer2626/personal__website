import React, { Component } from "react";
import styled from "styled-components";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import { skillsTable } from "../../displayInformation";
import SkillsContent from "./SkillsContent";
import { mediaQueries } from "../../mediaQueries";

const SkillsContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;
  row-gap: 0;

  ${mediaQueries("sm")`
    grid-template-columns: repeat(2,1fr);
  `}
`;

class SkillsComponent extends Component {
  state = { currentShowSkill: "" };

  handleCurrentShowSkillChange = (skilltitle) => {
    const { currentShowSkill } = this.state;
    const newCurrenShowSkill =
      currentShowSkill === skilltitle ? "" : skilltitle;
    this.setState({ currentShowSkill: newCurrenShowSkill });
  };

  render() {
    return (
      <Section
        title="Skills"
        subtitle="My technical level"
        id="skills"
        ref={this.props.forwardRef}
      >
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

const Skills = React.forwardRef((props, ref) => {
  return <SkillsComponent forwardRef={ref} />;
});

export default Skills;
