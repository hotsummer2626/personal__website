import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { Container as Wrapper } from "../../pages/Container";
import NavMenu from "./NavMenu";

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
`;

const NavWrapper = styled(Wrapper)`
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.a`
  color: var(--title-color);
  font-weight: var(--font-medium);
  &:hover {
    color: var(--first-color);
  }
`;

const NavButtons = styled.div``;

const NavToggle = styled.div`
  color: var(--title-color);
  font-size: 1.1rem;
  font-weight: var(--font-medium);
  cursor: pointer;
  &:hover {
    color: var(--first-color3);
  }
`;

export default class Header extends Component {
  state = {
    isNavMenuShow: false,
  };

  handleIsNavMenuShowChange = () => {
    const { isNavMenuShow } = this.state;
    this.setState({ isNavMenuShow: !isNavMenuShow });
  };

  render() {
    const { isNavMenuShow } = this.state;
    return (
      <Container>
        <NavWrapper>
          <NavLogo>Sunny</NavLogo>
          <NavMenu
            isNavMenuShow={isNavMenuShow}
            handleIsNavMenuShowChange={this.handleIsNavMenuShowChange}
          />
          <NavButtons>
            <NavToggle onClick={this.handleIsNavMenuShowChange}>
              <FontAwesomeIcon icon={faBullseye} />
            </NavToggle>
          </NavButtons>
        </NavWrapper>
      </Container>
    );
  }
}
