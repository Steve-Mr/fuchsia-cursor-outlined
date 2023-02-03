import { Colors } from "./core/types";

interface Config {
  themeName: string;
  color: Colors;
}

const fuchsia = "#e11c79";
const white = "#ffffff";
const red = "#ff1313";
const black = "#000000";

const config: Config[] = [
  {
    themeName: "Fuchsia-Red-Alt",
    color: {
      base: white,
      outline: red,
    },
  },
  {
    themeName: "Fuchsia-Alt",
    color: {
      base: white,
      outline: fuchsia,
    },
  },
  {
    themeName: "Fuchsia-Black-Alt",
    color: {
      base: white,
      outline: black,
    },
  },
];

export { config };
