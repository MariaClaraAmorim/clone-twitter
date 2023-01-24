import styled, { css } from "styled-components";

export const Container = styled.div`
display: none;

@media (min-width: 900px) {
    display: flex;    
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    align-self: center;
    text-align: center;
  padding: 9px 19px 20px;

  max-height: 100vh;
}

}`;

export const Aviso = styled.div`
display: flex;
flex-direction: column;


> span{
  display: flex;    gap: 1rem;
}
}`;

export const Button = styled.button`
background-color: var(--twitter);
color: #fff;
border-radius: 1rem;
padding: 0.6rem;
`;
