import React from "react";

import { Container, ZoomIn, Comment, Purple, Blue, Infos } from "./styles";

function ExploreBanner() {
  return (
    <>
      <Container>
        <img
          src="https://lh3.googleusercontent.com/a/AEdFTp5-azOxT9KMvnBXAt4peaBEtQjycsefDJpjJRVywg=s96-c"
          alt=""
        />

        <ZoomIn data-aos="zoom-in">
          <Comment>//Autora</Comment>
          <Purple>.infos </Purple>
          {"\u007B"}
          <Infos>
            Nome: <Blue>Maria Clara;</Blue>
          </Infos>
          <Infos>
            Sobrenome: <Blue>Amorim;</Blue>
          </Infos>
          {"\u007D"}
        </ZoomIn>
      </Container>
    </>
  );
}
export { ExploreBanner };
