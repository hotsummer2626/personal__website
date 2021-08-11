import React, { Component } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { navItemTable } from "../../../displayInformation";

const Container = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    bottom: ${({ isNavMenuShow }) => (isNavMenuShow ? "0" : "-100%")};
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
`;

const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const NavClose = styled.div`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--first-color);
  &:hover {
    color: var(--first-color-alt);
  }
`;

export default class NavMenu extends Component {
  render() {
    const { isNavMenuShow, handleIsNavMenuShowChange } = this.props;
    return (
      <Container isNavMenuShow={isNavMenuShow}>
        <NavList>
          {navItemTable.map((navItem) => (
            <NavItem
              key={navItem.text}
              href={navItem.href}
              icon={navItem.icon}
              handleIsNavMenuShowChange={handleIsNavMenuShowChange}
            >
              {navItem.text}
            </NavItem>
          ))}
        </NavList>
        <NavClose onClick={handleIsNavMenuShowChange}>
          <FontAwesomeIcon icon={faTimes} />
        </NavClose>
      </Container>
    );
  }
}
