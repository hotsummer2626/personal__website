import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.a`
  cursor: pointer;
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  &:hover {
    background-color: var(--first-color-alt);
  }

  ${(props) =>
    props.white
      ? css`
          background-color: #fff;
          color: var(--first-color);
          &:hover {
            color: var(--first-color);
          }
        `
      : css``}

  ${(props) =>
    props.flex
      ? css`
          display: inline-flex;
          align-items: center;
        `
      : css``}
  
  ${(props) =>
    props.small
      ? css`
          padding: 0.75rem 1rem;
        `
      : css``}

  ${(props) =>
    props.link
      ? css`
          padding: 0;
          background-color: transparent;
          color: var(--first-color);
          &:hover {
            background-color: transparent;
            color: var(--first-color-alt);
          }
        `
      : css``}
`;

export const ButtonIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.iconsize || "1.25rem"};
  margin-left: ${({ children }) => (children ? "var(--mb-0-5)" : "")};
  transition: 0.3s;
`;

const Button = (props) => {
  return (
    <Container href={props.href} onClick={props.onClick} {...props}>
      {props.children}
      <ButtonIcon
        icon={props.icon}
        iconsize={props.iconsize}
        children={props.children}
      />
    </Container>
  );
};

export default Button;
