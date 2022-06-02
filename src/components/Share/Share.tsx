import * as React from "react";
import styled from "styled-components";
import { ReactComponent as ShareIcon } from "../../assets/icon-share.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../assets/icon-pinterest.svg";

const Wrapper = styled.div`
  background: var(--very-dark-grayish-blue);
  color: var(--very-dark-grayish-blue);
  padding-bottom: 24px;
`;
const ExpandedWrapper = styled.div<{ expanded: boolean }>`
  background: var(--very-dark-grayish-blue);
  color: var(--very-dark-grayish-blue);
  position: absolute;
  top: -20px;
  width: calc(100% + 48px);
  margin-top: 20px;
  height: 70px;
  margin-left: -24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;
  padding-left: 24px;
  margin-bottom: ${(props) => (props.expanded ? "20px" : "0px")};
`;
const ShareCopy = styled.p`
  text-transform: uppercase;
  color: var(--grayish-blue);
  letter-spacing: 4px;
  margin-right: 24px;
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-right: auto;
  & > svg {
    cursor: pointer;
    color: var(--white);
  }

  & > svg:hover {
    color: var(--grayish-blue);
  }
`;
const Button = styled.button<{ expanded: boolean }>`
  border: none;
  background: var(--light-grayish-blue);
  color: var(--desaturated-dark-blue);
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  height: 40px;
  &:hover {
    background: var(--desaturated-dark-blue);
    color: var(--light-grayish-blue);
  }
  &:focus {
    outline-offset: 4px;
  }
`;

const Share = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  if (expanded) {
    return (
      <ExpandedWrapper expanded={expanded}>
        <ShareCopy>share</ShareCopy>
        <IconList>
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
        </IconList>
        <Button expanded={expanded} onClick={handleClick}>
          <ShareIcon />
        </Button>
      </ExpandedWrapper>
    );
  }
  return (
    <Button expanded={expanded} onClick={handleClick}>
      <ShareIcon />
    </Button>
  );
};

export default Share;
