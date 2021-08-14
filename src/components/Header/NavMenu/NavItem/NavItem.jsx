import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mediaQueries } from "../../../../mediaQueries";

const Container = styled.li``;

const NavLink = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: ${({ navItemName, currentShowComponent }) =>
    currentShowComponent === navItemName
      ? "var(--first-color)"
      : "var(--title-color)"};
  font-weight: var(--font-medium);
  &:hover {
    color: var(--first-color);
  }
`;

const NavIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  ${mediaQueries("md")`
    display: none;
  `}
`;

const NavItem = ({
  href,
  icon,
  children,
  currentShowComponent,
  handleIsNavMenuShowChange,
}) => {
  return (
    <Container>
      <NavLink
        href={`#${href}`}
        navItemName={href}
        onClick={handleIsNavMenuShowChange}
        currentShowComponent={currentShowComponent}
      >
        <NavIcon icon={icon} />
        {children}
      </NavLink>
    </Container>
  );
};

export default NavItem;
