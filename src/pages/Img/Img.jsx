import React from "react";
import styled from "styled-components";
import PROFILE_PHOTO from "../../assets/images/profile_photo.jpeg";
import { mediaQueries } from "../../mediaQueries";

const Container = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  border: 3px solid var(--first-color);
  overflow: hidden;
  background-color: var(--first-color);

  ${mediaQueries("sm")`
    order: 1;
    justify-self: center;
  `}
`;

const Content = styled.img`
  width: 100%;
`;

const Img = () => {
  return (
    <Container>
      <Content src={PROFILE_PHOTO} />
    </Container>
  );
};

export default Img;
