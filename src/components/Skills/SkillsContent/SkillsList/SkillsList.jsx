import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 1.5rem;
  row-gap: 1.5rem;
  padding-left: 2.7rem;
  transition: 0.3s;
  ${({ skillTitle, currentShowSkill }) => {
    const requiredCss =
      currentShowSkill === skillTitle
        ? css`
            height: max-content;
            margin-bottom: var(--mb-2-5);
          `
        : css`
            height: 0;
            overflow: hidden;
          `;
    return requiredCss;
  }}
`;

const Data = styled.div``;
const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
`;

const SkillsName = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
`;

const SkillsNumber = styled.span``;
const SkillsBar = styled.div`
  height: 5px;
  border-radius: 0.25rem;
  background-color: var(--first-color-lighter);
`;

const SkillsPercentage = styled.span`
  display: block;
  width: ${({ percentage }) => percentage};
  height: 5px;
  border-radius: 0.25rem;
  background-color: var(--first-color);
`;

const SkillsList = ({ skill, skillTitle, currentShowSkill }) => {
  return (
    <Container skillTitle={skillTitle} currentShowSkill={currentShowSkill}>
      <Data>
        <Titles>
          <SkillsName>{skill.name}</SkillsName>
          <SkillsNumber>{skill.number}</SkillsNumber>
        </Titles>

        <SkillsBar>
          <SkillsPercentage percentage={skill.number} />
        </SkillsBar>
      </Data>
    </Container>
  );
};

export default SkillsList;
