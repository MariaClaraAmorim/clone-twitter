import React, { useEffect, useState } from "react";

import { Container, Box, Content, Dot } from "./styles";

function ExploreCard() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/MariaClaraAmorim/repos")
        .then(async (res) => {
          if (!res.ok) {
            throw new Error("deu ruim");
          }
          var data = await res.json();
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  const thumbnailUrl = "https://via.placeholder.com/150";
  return (
    <>
      <Container>
        {itemsApi.map((item) => (
          <Content>
            <span>Assuntos do momento no Brasil</span>
            <Box>
              <img src={thumbnailUrl} alt="" />
              <a href="https://github.com/MariaClaraAmorim">
                <div>
                  <p> {item.name.toUpperCase()}</p>
                  <p>URL: {item.url}</p>
                </div>
              </a>
            </Box>
          </Content>

        ))}
      </Container>
    </>
  );
}

export { ExploreCard };
