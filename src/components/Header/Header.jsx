import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Container as Wrapper } from "../../pages/Container";
import NavMenu from "./NavMenu";
import { mediaQueries } from "../../mediaQueries";

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
  box-shadow: ${() =>
    window.scrollY >= 80 ? "0 -1px 4px rgba(0, 0, 0, 0.15)" : ""};

  ${mediaQueries("md")`
    top: 0;
    bottom: initial;
    padding: 0 1rem;
  `}

  ${mediaQueries("lg")`
    padding: 0;
  `}
`;

const NavWrapper = styled(Wrapper)`
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries("md")`
    height: 4.5rem;
    column-gap: 1rem;
  `}
`;

const NavLogo = styled.a`
  color: var(--title-color);
  font-weight: var(--font-medium);
  &:hover {
    color: var(--first-color);
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeChangeButton = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
  color: var(--title-color);
  margin-right: var(--mb-1);
  cursor: pointer;

  ${mediaQueries("md")`
    margin: 0;
  `}
`;

const NavToggleButton = styled(FontAwesomeIcon)`
  color: var(--title-color);
  font-size: 1.1rem;
  font-weight: var(--font-medium);
  cursor: pointer;
  &:hover {
    color: var(--first-color3);
  }

  ${mediaQueries("md")`
    display: none;
  `}
`;

export default class Header extends Component {
  state = {
    isNavMenuShow: false,
  };

  handleIsNavMenuShowChange = () => {
    this.setState(({ isNavMenuShow }) => ({ isNavMenuShow: !isNavMenuShow }));
  };

  render() {
    const { isNavMenuShow } = this.state;
    const { isDarkTheme, currentShowComponent, handleIsDarkThemeChange } =
      this.props;
    return (
      <Container>
        <NavWrapper>
          <NavLogo>Sunny</NavLogo>

          <NavMenu
            isNavMenuShow={isNavMenuShow}
            currentShowComponent={currentShowComponent}
            handleIsNavMenuShowChange={this.handleIsNavMenuShowChange}
          />

          <NavButtons>
            <ThemeChangeButton
              icon={isDarkTheme ? faSun : faMoon}
              onClick={handleIsDarkThemeChange}
            />
            <NavToggleButton
              icon={faBullseye}
              onClick={this.handleIsNavMenuShowChange}
            />
          </NavButtons>
        </NavWrapper>
      </Container>
    );
  }
}
