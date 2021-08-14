import React from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../pages/Button";
import { mediaQueries } from "../../../mediaQueries";

const Container = styled.form`
  display: grid;
  gap: 1.5rem;

  ${mediaQueries("lg")`
    width: 460px;
  `}
`;

const Inputs = styled.div`
  display: grid;
  gap: 1.5rem;

  ${mediaQueries("lg")`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const ContactContent = styled.div`
  background-color: var(--input-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;
`;

const Label = styled.label`
  font-size: var(--small-font-size);
  color: var(--title-color);
`;

const Input = styled.input`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
`;

const InputArea = styled.textarea`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
`;

const ContactForm = () => {
  return (
    <Container>
      <Inputs>
        <ContactContent>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" />
        </ContactContent>
        <ContactContent>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" />
        </ContactContent>
      </Inputs>
      <ContactContent>
        <Label htmlFor="project">Project</Label>
        <Input type="text" id="project" />
      </ContactContent>
      <ContactContent>
        <Label htmlFor="message">Message</Label>
        <InputArea cols="0" rows="7" id="message" />
      </ContactContent>
      <div>
        <Button href="#" flex={true} icon={faEnvelope}>
          Send Message
        </Button>
      </div>
    </Container>
  );
};

export default ContactForm;
