import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  margin-bottom: var(--mb-2);
`;

const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
`;

const Title = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
`;

const Subtitle = styled.span`
  font-size: var(--small-font-size);
  color: var(--text-color-light);
`;

const ContactInformation = ({ icon, title, subtitle }) => {
  return (
    <Container>
      <ContactIcon icon={icon} />

      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </Container>
  );
};

export default ContactInformation;
