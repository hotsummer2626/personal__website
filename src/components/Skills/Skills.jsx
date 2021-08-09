import React, { Component } from "react";
import styled from "styled-components";
import { faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
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
    const skillsTable = [
      {
        title: "Frontend developer",
        subtitle: "More than 4 years",
        icon: faCode,
        skillsList: [
          { name: "HTML", number: "90%" },
          { name: "CSS", number: "80%" },
          { name: "JavaScript", number: "60%" },
          { name: "React", number: "85%" },
        ],
      },
      {
        title: "Backend developer",
        subtitle: "More than 2 years",
        icon: faServer,
        skillsList: [
          { name: "PHP", number: "80%" },
          { name: "Node Js", number: "70%" },
          { name: "Firebase", number: "90%" },
          { name: "Python", number: "55%" },
        ],
      },
    ];
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
