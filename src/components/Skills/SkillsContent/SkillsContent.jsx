import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SkillsList from "./SkillsList";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
`;

const SkillsIcon = styled.div`
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
`;

const Title = styled.h1``;
const Subtitle = styled.span``;
const SkillsArrow = styled.div`
  font-size: 2rem;
  color: var(--first-color);
  margin-left: auto;
  transform: ${({ skillTitle, currentShowSkill }) => {
    const rotateDegree = currentShowSkill === skillTitle ? "-180" : "0";
    return `rotate(${rotateDegree}deg)`;
  }};
  transition: 0.4s;
`;

const SkillsContent = ({
  skill,
  currentShowSkill,
  handleCurrentShowSkillChange,
}) => {
  return (
    <Container>
      <Header
        onClick={() => {
          handleCurrentShowSkillChange(skill.title);
        }}
      >
        <SkillsIcon>
          <FontAwesomeIcon color="var(--first-color)" icon={skill.icon} />
        </SkillsIcon>
        <div>
          <Title>{skill.title}</Title>
          <Subtitle>{skill.subtitle}</Subtitle>
        </div>
        <SkillsArrow
          skillTitle={skill.title}
          currentShowSkill={currentShowSkill}
        >
          <FontAwesomeIcon color="var(--first-color)" icon={faAngleDown} />
        </SkillsArrow>
      </Header>

      {skill.skillsList.map((skillItem) => (
        <SkillsList
          key={skillItem.name}
          skill={skillItem}
          skillTitle={skill.title}
          currentShowSkill={currentShowSkill}
        />
      ))}
    </Container>
  );
};

export default SkillsContent;
