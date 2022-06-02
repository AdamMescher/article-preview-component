import styled from "styled-components";
import ArticlePreview from "../ArticlePreview";
import Avatar from "../../assets/avatar-michelle.jpg";
import Drawers from "../../assets/drawers.jpg";

const article = {
  author: "Michelle Appleton",
  publicationDate: "28 Jun 2020",
  title:
    "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
  description:
    "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
  articleSrc: Drawers,
  articleAlt: "",
  avatarSrc: Avatar,
  avatarAlt: ""
};

const Wrapper = styled.main`
  background: var(--light-grayish-blue);
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
`;

function App() {
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
      />
    </Wrapper>
  );
}

export default App;
