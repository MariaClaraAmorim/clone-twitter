import { publish } from "gh-pages";

const profile = "MariaClaraAmorim";
const project = "fake-app";
const email = "mariaclaraamorim221@gmail.com";

publish(
  "dist",
  {
    branch: "deploy",
    repo: `https://github.com/${profile}/${project}`,
    user: {
      name: profile,
      email: email,
    },
    dotfiles: true,
  },
  () => {
    console.log(
      `Seu APP está disponível em https://${profile}.github.io/${project}/`
    );
  }
);
