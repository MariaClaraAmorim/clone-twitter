// import styled from "styled-components";

// export const Container = styled.div`
//   background-color: #25363c;
//   padding: 10px;
//   display: flex;
//   align-items: center;
//   margin-top: 20px;
// `;

// export const IconUser = styled.div`
//   flex-shrink: 0;
//   width: 60px;
//   border: 1px solid #25363c;
//   border-radius: 50%;
// `;

// export const IconeUser = styled.img`
//   width: 10%;
//   border: 1px solid;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
// `;

// export const Nome = styled.div`
//   color: #fcfcfc;
// `;
// export const Texto = styled.div`
//   color: #fcfcfc;
//   font-style: oblique;
// `;
// export const PostList = styled.div``;

// export const Titulos = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export const Infos = styled.div`
//   font-size: 20px;
//   padding: 15px;

//   > a {
//     text-decoration: none;
//   }
// `;


import styled, { css } from "styled-components";

import { Favorite } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.img`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
`;
// export const RocketseatIcon = styled.img`
//   width: 16px;
//   height: 16px;
//   margin-left: 35px;
//   margin-right: 9px;

//   > path {
//     fill: var(--gray);
//   }
// `;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

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


export const AvatarUser = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
  top: 0;
  left: 0;
`;
