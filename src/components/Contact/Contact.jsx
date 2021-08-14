import React from "react";
import styled from "styled-components";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm/ContactForm";
import { contactInformationTable } from "../../displayInformation";
import { mediaQueries } from "../../mediaQueries";

const ContactContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;
  row-gap: 3rem;

  ${mediaQueries("sm")`
    grid-template-columns: repeat(2,1fr);
  `}
`;

const Contact = React.forwardRef((props, ref) => {
  return (
    <Section title="Contact Me" subtitle="Get in touch" id="contact" ref={ref}>
      <ContactContainer>
        <div>
          {contactInformationTable.map((information) => (
            <ContactInformation
              key={information.title}
              icon={information.icon}
              title={information.title}
              subtitle={information.subtitle}
            />
          ))}
        </div>
        <ContactForm />
      </ContactContainer>
    </Section>
  );
});

export default Contact;
