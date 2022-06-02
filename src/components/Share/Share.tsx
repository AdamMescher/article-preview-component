import * as React from "react";
import styled from "styled-components";
import { ReactComponent as ShareIcon } from "../../assets/icon-share.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../assets/icon-pinterest.svg";

interface Props {
  type: string;
}

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
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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
  padding-right: 8px;
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

const Popover = styled.div`
  position: relative;
`;
const PopoverContent = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  background: green;
  top: -75px;
  left: -80px;
  z-index: 999;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  background: var(--very-dark-grayish-blue);
  align-items: center;
  & > span {
    margin-right: 24px;
    text-transform: uppercase;
  }
`;
const Arrow = styled.div`
  position: absolute;
  bottom: -15px;
  left: 87px;
  width: 25px;
  height: 15px;
  background: var(--very-dark-grayish-blue);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
`;
const IconListPopover = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  & > svg {
    cursor: pointer;
    color: var(--white);
  }

  & > svg:hover {
    color: var(--grayish-blue);
  }
`;

const Share = ({ type }: Props) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  if (expanded) {
    return type === "container" ? (
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
    ) : (
      <Popover>
        <Button expanded={expanded} onClick={handleClick}>
          <ShareIcon />
        </Button>
        <PopoverContent>
          <Arrow />
          <ShareCopy>share</ShareCopy>
          <IconListPopover>
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
          </IconListPopover>
        </PopoverContent>
      </Popover>
    );
  }
  return (
    <Button expanded={expanded} onClick={handleClick}>
      <ShareIcon />
    </Button>
  );
};

export default Share;
