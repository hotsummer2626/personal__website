import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.li``;

const NavLink = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  &:hover {
    color: var(--first-color);
  }
`;

const NavItem = ({ href, icon, children, handleIsNavMenuShowChange }) => {
  return (
    <Container>
      <NavLink href={`#${href}`} onClick={handleIsNavMenuShowChange}>
        <FontAwesomeIcon size="lg" icon={icon} />
        <br />
        {children}
      </NavLink>
    </Container>
  );
};

export default NavItem;
