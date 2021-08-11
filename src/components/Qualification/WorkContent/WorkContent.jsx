import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: ${({ qulificationType, currentShowQualification }) => {
    const requiredDisplayMode =
      currentShowQualification === qulificationType ? "block" : "none";
    return requiredDisplayMode;
  }};
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`;

const DataInfo = styled.div``;
const DataDecoration = styled.div``;

const Title = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
`;

const Subtitle = styled.span`
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-1);
`;

const Calendar = styled.div`
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
`;

const Rounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--first-color);
  border-radius: 50%;
`;

const Line = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--first-color);
  transform: translate(6px, -7px);
`;

const EducationContent = ({ qulificationType, currentShowQualification }) => {
  return (
    <Container
      qulificationType={qulificationType}
      currentShowQualification={currentShowQualification}
    >
      <Data>
        <DataInfo>
          <Title>Computer Enginner</Title>
          <Subtitle>Peru - University</Subtitle>
          <Calendar>
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp; 2009-2014
          </Calendar>
        </DataInfo>

        <DataDecoration>
          <Rounder />
          <Line />
        </DataDecoration>
      </Data>

      <Data>
        <div></div>

        <DataDecoration>
          <Rounder />
        </DataDecoration>

        <DataInfo>
          <Title>Web Design</Title>
          <Subtitle>Spain - Institute</Subtitle>
          <Calendar>
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp; 2014 -2017
          </Calendar>
        </DataInfo>
      </Data>
    </Container>
  );
};

export default EducationContent;
