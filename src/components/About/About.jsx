import React from "react";
import styled from "styled-components";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import Button from "../../pages/Button";
import PROFILE_PHOTO from "../../assets/images/profile_photo.jpeg";
import CV from "../../assets/pdf/Alexa-Cv.pdf";
import { mediaQueries } from "../../mediaQueries";

const AboutContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;

  ${mediaQueries("sm")`
    grid-template-columns: repeat(2,1fr);
  `}

  ${mediaQueries("md")`
    column-gap: 5rem;
  `}
`;

const Img = styled.img`
  width: 200px;
  border-radius: 0.5rem;
  justify-self: center;
  align-self: center;
`;

const Data = styled.div``;

const Description = styled.p`
  text-align: center;
  margin-bottom: var(--mb-2-5);

  ${mediaQueries("md")`
    text-align: initial;
  `}
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2-5);

  ${mediaQueries("md")`
    justify-content: space-between;
  `}
`;

const InfoTitle = styled.span`
  display: block;
  text-align: center;
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
`;

const InfoName = styled.span`
  display: block;
  text-align: center;
  font-size: var(--smaller-font-size);
`;

const AboutButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  ${mediaQueries("md")`
    justify-content: initial;
  `}
`;

const About = React.forwardRef((props, ref) => {
  return (
    <Section title="About Me" subtitle="My introduction" id="about" ref={ref}>
      <AboutContainer>
        <Img src={PROFILE_PHOTO} />
        <Data>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
            optio at, deleniti ipsam architecto. Optio?
          </Description>
          <Info>
            <div>
              <InfoTitle>08+</InfoTitle>
              <InfoName>
                Years <br /> experience
              </InfoName>
            </div>
            <div>
              <InfoTitle>20+</InfoTitle>
              <InfoName>
                Completed <br /> project
              </InfoName>
            </div>
            <div>
              <InfoTitle>05+</InfoTitle>
              <InfoName>
                Companies <br /> worked
              </InfoName>
            </div>
          </Info>
          <AboutButtonContainer>
            <Button download="" href={CV} flex={true} icon={faDownload}>
              Download CV
            </Button>
          </AboutButtonContainer>
        </Data>
      </AboutContainer>
    </Section>
  );
});

export default About;
