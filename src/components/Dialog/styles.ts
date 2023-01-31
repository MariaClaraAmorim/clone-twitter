import styled, { css } from "styled-components";

export const Container = styled.div`
position: fixed;
top: 0;
height: 100%;
width: 100%;
z-index: 50;
`;

export const Dialog = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
min-height: fit-content;
min-width: fit-content;
width: 95vw;

@media (min-width: 56rem) {
  width: 80vw;
}

@media (min-width: 76rem) {
  width: 45vw;
}`;

export const Panel = styled.div`
background: var(--background);
	border-radius: 0.5rem;
	color: var(--on-background);
`;

export const Items = styled.div`
display: flex;
    flex-direction: column;
`;

export const Description = styled.div`

`;

