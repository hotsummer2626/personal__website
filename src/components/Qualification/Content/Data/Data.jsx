import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`;

const DataInfo = styled.div`
  order: ${({ index }) => (index % 2 !== 0 ? 3 : 1)};
`;
const DataDecoration = styled.div`
  order: 2;
`;

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

const Empty = styled.div`
  order: ${({ index }) => (index % 2 !== 0 ? 1 : 3)};
`;

const Data = ({ item, index }) => {
  return (
    <Container>
      <DataInfo index={index}>
        <Title>{item.title}</Title>
        <Subtitle>{item.subtitle}</Subtitle>
        <Calendar>
          <FontAwesomeIcon icon={faCalendarAlt} />
          &nbsp; {item.calendar}
        </Calendar>
      </DataInfo>

      <DataDecoration>
        <Rounder />
        <Line />
      </DataDecoration>

      <Empty index={index} />
    </Container>
  );
};

export default Data;
