import * as React from "react";
import styled from "styled-components";
import ArticlePreview from "../ArticlePreview";
import useWindowSize from "../../hooks/useWindowSize";
import Avatar from "../../assets/avatar-michelle.jpg";
import Drawers from "../../assets/drawers.jpg";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const article = {
  author: "Michelle Appleton",
  publicationDate: "28 Jun 2020",
  title:
    "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
  description:
    "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
  articleSrc: Drawers,
  articleAlt:
    "green drawers with tasteful arrangement of two photos and a jar with wheat",
  avatarSrc: Avatar,
  avatarAlt: "Article author Michelle Appleton"
};

const Wrapper = styled.main`
  background: var(--light-grayish-blue);
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
  @media (min-width: 650px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

function App() {
  const size: Size = useWindowSize();
  return (
    <Wrapper data-testid="app">
      <ArticlePreview
        author={article.author}
        title={article.title}
        description={article.description}
        publicationDate={article.publicationDate}
        articleSrc={article.articleSrc}
        articleAlt={article.articleAlt}
        avatarSrc={article.avatarSrc}
        avatarAlt={article.avatarAlt}
        size={size}
      />
    </Wrapper>
  );
}

export default App;
