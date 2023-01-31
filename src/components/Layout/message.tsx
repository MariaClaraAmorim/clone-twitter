
import { MenuBar } from "../MenuBar";

import { Message } from "../Message";
import { SpanMessage } from "../SpanMessage";
import { Container, Wrapper } from "./styles";

function LayoutMessage() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Message/>
        <SpanMessage />
      </Wrapper>
    </Container>
  );
}

export { LayoutMessage };
