import React from "react";
import styled from "styled-components";
import Data from "./Data";

const Container = styled.div`
  display: ${({ qualificationType, currentShowQualification }) => {
    const requiredDisplayMode =
      currentShowQualification === qualificationType ? "block" : "none";
    return requiredDisplayMode;
  }};
`;

const Content = ({ qualification, currentShowQualification }) => {
  return (
    <Container
      qualificationType={qualification.type}
      currentShowQualification={currentShowQualification}
    >
      {qualification.details.map((item, index) => (
        <Data key={index} item={item} index={index} />
      ))}
    </Container>
  );
};

export default Content;
