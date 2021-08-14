import React, { Component } from "react";
import styled from "styled-components";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Button from "./pages/Button";
import { navItemTable } from "./displayInformation";
import { mediaQueries } from "./mediaQueries";

const Main = styled.main`
  ${mediaQueries("md")`
    padding: 0 1rem;
  `}

  ${mediaQueries("md")`
    padding: 0;
  `}
`;

const ScrollUpButton = styled(Button)`
  position: fixed;
  right: 1rem;
  bottom: ${() => (window.scrollY >= 80 ? "5rem" : "-20%")};
  opacity: 0.8;
  border-radius: 0.4rem;
  padding: 0.3rem 0.5rem;
  z-index: var(--z-tooltip);
  transition: 0.4s;
`;

export default class App extends Component {
  state = { isDarkTheme: false, currentShowComponent: "home" };

  home = React.createRef();
  about = React.createRef();
  skills = React.createRef();
  services = React.createRef();
  portfolio = React.createRef();
  contact = React.createRef();

  buildSectionRangeTable = (navItemTable) => {
    const sectionRangeTable = [];

    navItemTable.forEach((item) => {
      const sectionHeight = this[item.href].current.offsetHeight;
      const sectionTop = this[item.href].current.offsetTop - 50;
      const sectionName = item.href;

      const sectionRangeItem = {
        min: sectionTop,
        max: sectionTop + sectionHeight,
        name: sectionName,
      };

      sectionRangeTable.push(sectionRangeItem);
    });
    return sectionRangeTable;
  };

  handleCurrentShowComponentChange = () => {
    const scrollTop = window.scrollY;
    const sectionRangeTable = this.buildSectionRangeTable(navItemTable);

    sectionRangeTable.forEach((sectionRange) => {
      if (scrollTop > sectionRange.min && scrollTop <= sectionRange.max) {
        this.setState({ currentShowComponent: sectionRange.name });
      }
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleCurrentShowComponentChange);
  }

  handleIsDarkThemeChange = () => {
    this.setState(({ isDarkTheme }) => ({ isDarkTheme: !isDarkTheme }));
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollTopChange);
  }

  render() {
    return (
      <>
        <GlobalStyles isDarkTheme={this.state.isDarkTheme} />
        <Header
          {...this.state}
          handleIsDarkThemeChange={this.handleIsDarkThemeChange}
        />
        <Main>
          <Home ref={this.home} />
          <About ref={this.about} />
          <Skills ref={this.skills} />
          <Qualification />
          <Services ref={this.services} />
          <Portfolio ref={this.portfolio} />
          <Contact ref={this.contact} />
        </Main>
        <ScrollUpButton href="#" icon={faArrowUp} iconsize="1rem" />
      </>
    );
  }
}
