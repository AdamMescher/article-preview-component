import * as React from "react";
import styled from "styled-components";
import Share from "../Share";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

interface Props {
  author: string;
  title: string;
  description: string;
  publicationDate: string;
  articleSrc: string;
  articleAlt: string;
  avatarSrc: string;
  avatarAlt: string;
  size: Size;
}

const Wrapper = styled.article`
  min-width: 260px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0.7px 2.1px 2.7px rgba(0, 0, 0, 0.022),
    1.7px 5.2px 6.9px rgba(0, 0, 0, 0.031),
    3.5px 10.6px 14.2px rgba(0, 0, 0, 0.039),
    7.3px 21.9px 29.2px rgba(0, 0, 0, 0.048), 20px 60px 80px rgba(0, 0, 0, 0.07);
  @media (min-width: 650px) {
    display: flex;
    max-width: 700px;
  }
`;
const ImageWrapper = styled.div`
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  overflow: hidden;
  & > img {
    width: 100%;
    display: block;
    object-fit: cover;
    height: max(10rem, 30vh);
    max-height: max(10rem, 30vh);
  }
  @media (min-width: 650px) {
    background: yellow;
    & > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      max-height: 100%;
    }
  }
`;
const Content = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 40px;
  @media (min-width: 650px) {
    margin-left: 28px;
    margin-right: 28px;
  }
`;
const Title = styled.h3`
  color: var(--very-dark-grayish-blue);
`;
const Description = styled.p`
  margin-top: 20px;
  color: var(--desaturated-dark-blue);
`;
const ShareWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const AvatarWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 50px;
  width: 50px;
  & > img {
    width: 100%;
    display: block;
  }
`;
const NameAndDateWrapper = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 24px;
  margin-right: auto;
`;
const Author = styled.p`
  color: var(--very-dark-grayish-blue);
  font-weight: var(--fw-bold);
  padding-right: 6px;
  white-space: nowrap;
`;
const Date = styled.p`
  color: var(--grayish-blue);
`;

const ArticlePreview = ({
  author,
  title,
  description,
  publicationDate,
  articleSrc,
  articleAlt,
  avatarSrc,
  avatarAlt,
  size
}: Props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={articleSrc} alt={articleAlt} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ShareWrapper>
          <AvatarWrapper>
            <img src={avatarSrc} alt={avatarAlt} />
          </AvatarWrapper>
          <NameAndDateWrapper>
            <Author>{author}</Author>
            <Date>{publicationDate}</Date>
          </NameAndDateWrapper>
          <Share type={size && size?.width > 650 ? "popover" : "container"} />
        </ShareWrapper>
      </Content>
    </Wrapper>
  );
};

export default ArticlePreview;
