import React from "react";

import { Container, Content, Dot } from "./styles";

import { Popover } from "@headlessui/react";
function ExploreCard() {
  return (
    <>
      <Container>
        <Content>
          <span>Assunto do momento</span>
          {/* <Popover className="relative">
            <Popover.Button>Solutions</Popover.Button>

            <Popover.Panel className="absolute z-10">
              <div className="grid grid-cols-2">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
              </div>

              <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
          </Popover> 
          <Dot />*/}
          <strong>Programação</strong>
          <span>18,8 mil tweets</span>
        </Content>
      </Container>
    </>
  );
}

export { ExploreCard };
