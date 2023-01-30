import { useUserContext } from "@contexts/UserContext";
import { useState } from "react";

import {
  Avatar,
  Container,
  Profile,
  SearchInput,
  SearchWrapper,
} from "./styles";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useUserContext();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
 Olá, modal aqui
    </>
  );
}

export { Modal };
