import React from "react";
import styled, { css } from "styled-components";
import emailjs from "emailjs-com";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../pages/Button";
import { mediaQueries } from "../../../mediaQueries";
import validate from "./validate";
import Modal from "../../../pages/Modal";
import Loading from "./Loading";
import Content from "./Content";

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

const InputStyle = css`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
`;

const Input = styled.input`
  ${InputStyle}
`;

const InputArea = styled.textarea`
  ${InputStyle}
`;

const ErrorMessage = styled.div`
  color: #b00020;
  font-size: var(--small-font-size);
`;

const ButtonWrapper = styled.button`
  width: max-content;
  background-color: transparent;
  border: none;
  outline: none;
`;

class ContactForm extends React.Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      project: "",
      message: "",
    },

    isFormSubmit: false,
    isModalShow: false,
    isLoading: false,
    isFormSubmitSuccess: false,
  };

  handleDataChange = (e) => {
    const { id: name, value } = e.target;
    this.setState((state) => {
      return { data: { ...state.data, [name]: value } };
    });
  };

  handleIsFormSubmitChange = () => {
    this.setState({ isFormSubmit: true });
  };

  handleIsModalShowChange = () => {
    this.setState((state) => ({ isModalShow: !state.isModalShow }));
  };

  getError = (data) => {
    const error = {};
    Object.keys(data).forEach((name) => {
      const errorOfName = validate(name, data);
      if (!errorOfName) {
        return;
      }
      error[name] = errorOfName;
    });
    return error;
  };

  hasError = () => {
    const { data } = this.state;
    const error = this.getError(data);
    return Object.keys(error).length > 0;
  };

  successWorkFlow = () => {
    this.handleIsModalShowChange();
    this.setState({ isLoading: true });
  };

  sendEmail = (e) => {
    e.preventDefault();

    if (this.hasError()) return;

    this.successWorkFlow();

    emailjs
      .sendForm(
        "service_fcc9mfg",
        "template_p4da8wu",
        e.target,
        "user_eFpNP7nuBn5Faqq9pW4D1"
      )
      .then((result) => {
        if (result) {
          this.setState({ isFormSubmitSuccess: true, isLoading: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { data, isFormSubmit, isModalShow, isLoading, isFormSubmitSuccess } =
      this.state;
    const error = this.getError(data);

    return (
      <Container onSubmit={this.sendEmail}>
        <Inputs>
          <ContactContent>
            <Label htmlFor="firstName">FirstName</Label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              onChange={this.handleDataChange}
            />
            <ErrorMessage>{isFormSubmit ? error.firstName : ""}</ErrorMessage>
          </ContactContent>
          <ContactContent>
            <Label htmlFor="lastName">LastName</Label>
            <Input
              name="lastName"
              type="text"
              id="lastName"
              onChange={this.handleDataChange}
            />
            <ErrorMessage>{isFormSubmit ? error.lastName : ""}</ErrorMessage>
          </ContactContent>
        </Inputs>

        <ContactContent>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="text"
            id="email"
            onChange={this.handleDataChange}
          />
          <ErrorMessage>{isFormSubmit ? error.email : ""}</ErrorMessage>
        </ContactContent>
        <ContactContent>
          <Label htmlFor="project">Project</Label>
          <Input
            name="project"
            type="text"
            id="project"
            onChange={this.handleDataChange}
          />
          <ErrorMessage>{isFormSubmit ? error.project : ""}</ErrorMessage>
        </ContactContent>
        <ContactContent>
          <Label htmlFor="message">Message</Label>
          <InputArea
            name="message"
            cols="0"
            rows="7"
            id="message"
            onChange={this.handleDataChange}
          />
          <ErrorMessage>{isFormSubmit ? error.message : ""}</ErrorMessage>
        </ContactContent>

        <ButtonWrapper type="submit">
          <Button
            flex={true}
            icon={faEnvelope}
            onClick={this.handleIsFormSubmitChange}
          >
            Send Message
          </Button>
        </ButtonWrapper>

        <Modal
          isModalShow={isModalShow}
          handleIsModalShowChange={this.handleIsModalShowChange}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <Content
              isFormSubmitSuccess={isFormSubmitSuccess}
              handleIsModalShowChange={this.handleIsModalShowChange}
            />
          )}
        </Modal>
      </Container>
    );
  }
}

export default ContactForm;
