import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonIcon } from "../../../pages/Button";
import Modal from "../../../pages/Modal";
import { mediaQueries } from "../../../mediaQueries";

const Container = styled.div`
  position: relative;
  background-color: var(--container-color);
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  ${mediaQueries("md")`
    padding: 6rem 0 2rem 2.5rem;
  `}
`;

const ServicesIcon = styled(FontAwesomeIcon)`
  display: block;
  font-size: 1.5rem;
  color: var(--first-color);
  margin-bottom: var(--mb-1);

  ${mediaQueries("md")`
    font-size: 2rem;
  `}
`;

const Title = styled.h3`
  font-size: var(--h3-font-size);
  margin-top: var(--mb-1);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
`;

const ServiceButton = styled(Button)`
  cursor: pointer;
  font-size: var(--small-font-size);
  &:hover ${ButtonIcon} {
    transform: translateX(0.25rem);
  }
`;

const ModalTitle = styled.h4`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1-5);
`;

const Services = styled.ul`
  display: grid;
  row-gap: 1rem;
`;

const Service = styled.li`
  display: flex;
  align-items: center;
`;

const Description = styled.p``;

const ModalIcon = styled(FontAwesomeIcon)`
  color: var(--first-color);
  margin-right: var(--mb-0-25);
`;

export default class Content extends Component {
  state = { isModalShow: false };

  handleIsModalShowChange = () => {
    this.setState((state) => ({ isModalShow: !state.isModalShow }));
  };

  render() {
    return (
      <Container>
        <div>
          <ServicesIcon icon={faBorderAll} />
          <Title>
            Ui/Ux <br /> Designer
          </Title>
        </div>

        <ServiceButton
          flex={true}
          small={true}
          link={true}
          icon={faArrowRight}
          iconsize="var(--small-font-size)"
          onClick={this.handleIsModalShowChange}
        >
          View More
        </ServiceButton>

        <Modal
          isModalShow={this.state.isModalShow}
          handleIsModalShowChange={this.handleIsModalShowChange}
        >
          <ModalTitle>
            Ui/Ux <br /> Designer
          </ModalTitle>

          <Services>
            <Service>
              <ModalIcon icon={faCheckCircle} />
              <Description>I develop the user interface</Description>
            </Service>
            <Service>
              <ModalIcon icon={faCheckCircle} />
              <Description>I develop the user interface</Description>
            </Service>
            <Service>
              <ModalIcon icon={faCheckCircle} />
              <Description>I develop the user interface</Description>
            </Service>
            <Service>
              <ModalIcon icon={faCheckCircle} />
              <Description>I develop the user interface</Description>
            </Service>
          </Services>
        </Modal>
      </Container>
    );
  }
}
