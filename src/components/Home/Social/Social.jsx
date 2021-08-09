import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: var(--first-color);
  &:hover {
    color: var(--first-color-alt);
  }
`;

const Social = () => {
  return (
    <Container>
      <SocialIcon>
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialIcon>
      <SocialIcon>
        <FontAwesomeIcon icon={faDribbble} />
      </SocialIcon>
      <SocialIcon>
        <FontAwesomeIcon icon={faGithub} />
      </SocialIcon>
    </Container>
  );
};

export default Social;
