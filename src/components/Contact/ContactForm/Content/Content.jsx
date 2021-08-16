import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../pages/Button";

const Container = styled.div`
  display: grid;
  row-gap: 2rem;
  justify-items: center;
  padding: 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${({ issuccess }) => (issuccess === "true" ? "#4bb543" : "#b00020")};
`;

const Title = styled.h2`
  font-size: var(--h2-font-size);
`;

const Description = styled.p`
  font-size: var(--normal-font-size);
`;

const GoBackButton = styled(Button)`
  width: 10rem;
  text-align: center;
`;

const Content = ({ isFormSubmitSuccess, handleIsModalShowChange }) => {
  const content = {
    true: {
      icon: faCheckCircle,
      title: "Thank you for your email!",
      description: "I will reply you shortly.",
      buttonMeg: "OK",
    },
    false: {
      icon: faExclamationCircle,
      title: "Something went wrong!",
      description: "Please try again.",
      buttonMeg: "Try Now",
    },
  }[isFormSubmitSuccess];

  return (
    <Container>
      <Icon icon={content.icon} issuccess={isFormSubmitSuccess.toString()} />
      <Title>{content.title}</Title>
      <Description>{content.description}</Description>
      <GoBackButton onClick={handleIsModalShowChange}>
        {content.buttonMeg}
      </GoBackButton>
    </Container>
  );
};

export default Content;
