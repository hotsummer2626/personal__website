import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Section from "../../pages/Section";
import { Container } from "../../pages/Container";
import { portfolioContentTable } from "../../displayInformation";
import Content from "./Content";
import { mediaQueries } from "../../mediaQueries";

const PortfolioContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const SwiperWrapper = styled.div`
  display: flex;
  width: max-content;
  transform: ${({ currentShowContentIndex: index }) =>
    `translateX(calc(${index - 1} * (2.5rem - 100vw)))`};
  transition: 0.3s;

  @media (min-width: 576px) {
    transform: ${({ currentShowContentIndex: index }) =>
      `translateX(calc(${index - 1} * (3.5rem - 100vw)))`};
  }

  @media (min-width: 768px) {
    transform: ${({ currentShowContentIndex: index }) =>
      `translateX(calc(${index - 1} * (-768px)))`};
  }
`;

const SwiperArrowLeft = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 2rem;
`;

const SwiperArrowRight = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  font-size: 2rem;
`;

const SwiperDotsContainer = styled.div`
  width: calc(100vw - 2.5rem);
  display: flex;
  justify-content: center;

  ${mediaQueries("sm")`
    width: calc(100vw - 3.5rem);
  `}

  ${mediaQueries("md")`
    width: 768px;
  `}

  ${mediaQueries("lg")`
    margin-top: 3rem;
  `}
`;

const SwiperDot = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  margin: 0 0.6rem;
  border-radius: 50%;
  background-color: ${({ currentShowContentIndex, index }) =>
    currentShowContentIndex === index ? "var(--first-color)" : "gray"};
`;

class PortfolioComponent extends Component {
  state = { currentShowContentIndex: 1 };

  handleCurrentShowContentIndexChange = (index) => {
    const { currentShowContentIndex } = this.state;

    if (index !== "left" && index !== "right") {
      this.setState({ currentShowContentIndex: index });
      return;
    }

    const newCurrentShowContentIndex = {
      left: currentShowContentIndex - 1,
      right: currentShowContentIndex + 1,
    }[index];

    if (
      newCurrentShowContentIndex < 1 ||
      newCurrentShowContentIndex > portfolioContentTable.length
    ) {
      this.setState({ currentShowContentIndex: currentShowContentIndex });
    } else {
      this.setState({ currentShowContentIndex: newCurrentShowContentIndex });
    }
  };

  render() {
    const buildSwiperDotsArr = (contentTable) => {
      const dotsIndexArr = [];
      for (let i = 0; i < contentTable.length; i += 1) {
        dotsIndexArr.push(i + 1);
      }
      return dotsIndexArr;
    };

    return (
      <Section
        title="Portfolio"
        subtitle="Most rencet work"
        id="portfolio"
        ref={this.props.forwardRef}
      >
        <PortfolioContainer>
          <SwiperWrapper
            currentShowContentIndex={this.state.currentShowContentIndex}
          >
            {portfolioContentTable.map((portfolio) => (
              <Content key={portfolio.title} {...portfolio} />
            ))}
          </SwiperWrapper>

          <SwiperArrowLeft
            icon={faChevronLeft}
            onClick={() => {
              this.handleCurrentShowContentIndexChange("left");
            }}
          />
          <SwiperArrowRight
            icon={faChevronRight}
            onClick={() => {
              this.handleCurrentShowContentIndexChange("right");
            }}
          />

          <SwiperDotsContainer>
            {buildSwiperDotsArr(portfolioContentTable).map((index) => (
              <SwiperDot
                key={index}
                index={index}
                currentShowContentIndex={this.state.currentShowContentIndex}
                onClick={() => {
                  this.handleCurrentShowContentIndexChange(index);
                }}
              />
            ))}
          </SwiperDotsContainer>
        </PortfolioContainer>
      </Section>
    );
  }
}

const Portfolio = React.forwardRef((props, ref) => {
  return <PortfolioComponent forwardRef={ref} />;
});

export default Portfolio;
