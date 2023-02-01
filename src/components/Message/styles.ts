import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  padding: 1rem;

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin-left: 1rem;
`;

export const Content = styled.div``;

export const Profile = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: space-around;
  // gap: 1rem;
  // padding: 8px 9px 9px 13px;
  // border-bottom: 1px solid var(--outline);
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

export const SearchWrapper = styled.div`
  width: 100%;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  border-radius: 19.5px;
  outline: 0;
  border: 1px solid;
  padding: 0.8rem;
  background: var(--search);
  outline: 0;
  width: 100%;

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  outline: 0;
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  text-align: center;
`;

export const ImageContent = styled.img`
  width: 100%;
  cursor: pointer;
  margin-top: 12px;
  border-radius: 14px;
  background: var(--outline);
  height: min(285px, max(175px, 41vw));

  &:hover {
    opacity: 0.7;
  }
`;
export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  gap: 0.4rem;

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

// export const Container = styled.div``;

// export const Container = styled.div``;

export const Botside = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
gap: 1rem;
`;

export const ProfileData = styled.div`
  display: flex;
  gap: 2rem;
  // display: none;

  // @media (min-width: 1280px) {
  //   display: flex;
  //   flex-direction: column;

  //   margin-left: 10px;
  //   font-size: 14px;

  //   > span {
  //     color: var(--gray);
  //   }
  // }
`;

