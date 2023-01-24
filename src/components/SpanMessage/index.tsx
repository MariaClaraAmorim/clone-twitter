import React from "react";

import { Container, Aviso, Button } from "./styles";

function SpanMessage() {
  return (
    <Container>
      <Aviso>
        <strong>Selecione uma mensagem</strong>
        <span>
          Escolha entre as conversas existentes,inicie uma nova ou continue
          explorando.
        </span>
      </Aviso>
      <Button>Nova mensagem</Button>
    </Container>
  );
}

export { SpanMessage };
// Selecione uma mensagem
// Escolha entre as conversas existentes,
// inicie uma nova ou continue explorando.
