import { useState } from "react";

import { Menu } from "@headlessui/react";

const links = [
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

function UiMenu() {
  return (
    <>
      <Menu>
        <Menu.Button>Opção</Menu.Button>
        <Menu.Items>
          {links.map((link) => (
            <Menu.Item as="a" key={link.href} href={link.href}>
              {link.label}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </>
  );
}

export { UiMenu };
