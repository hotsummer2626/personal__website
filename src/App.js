import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";

const Main = styled.main``;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
        <Main>
          <Home />
          <About />
          <Skills />
          <Qualification />
        </Main>
      </>
    );
  }
}
