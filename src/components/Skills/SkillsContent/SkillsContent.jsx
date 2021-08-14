import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SkillsList from "./SkillsList";
import { mediaQueries } from "../../../mediaQueries";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
`;

const SkillsIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
`;

const Title = styled.h1`
  ${mediaQueries("sm")`
    font-size: var(--h3-font-size);
  `}
`;
const Subtitle = styled.span``;

const SkillsArrowIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: var(--first-color);
  margin-left: auto;
  transform: ${({ skilltitle, currentshowskill }) => {
    const rotateDegree = currentshowskill === skilltitle ? "-180" : "0";
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
        <SkillsIcon icon={skill.icon} />

        <div>
          <Title>{skill.title}</Title>
          <Subtitle>{skill.subtitle}</Subtitle>
        </div>

        <SkillsArrowIcon
          icon={faAngleDown}
          skilltitle={skill.title}
          currentshowskill={currentShowSkill}
        />
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
