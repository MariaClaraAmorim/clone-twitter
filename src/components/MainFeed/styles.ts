import styled, { css } from "styled-components";

import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);
  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  // margin-left: 17px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: larger;
`;

export const Avatar = styled.img`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const SearchWrapper = styled.div``;

export const SearchInput = styled.input`
  font-size: 1.4rem;
  height: 5rem;
  width: 100%;
  border-radius: 19.5px;
  //   background: var(--search);

  &::placeholder {
    // color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    // border: 1px solid var(--twitter);

    ~ svg {
      //   fill: var(--twitter);
    }
  }
`;

export const Span = styled.span`
  // list-style: none;
  // display: flex;
  // gap: 2rem;
  // font-size: larger;
  // background-color: var(--twitter);
  // width: 100%;
  // height: 0.1rem;
}
`;

export const Body = styled.div`
  display: flex;
  position: relative;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
  // margin-top: 1rem;
  // padding: 1rem 0 1rem 1rem;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;
  flex-wrap: wrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 15px;
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.img`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%; /** Mobile */

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
      fill: var(--retweet);
    }
  }
  &:nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--gray);
  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const Box = styled.div`
  display: flex;
  gap: 1rem;
`;
