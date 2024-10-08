import { extendTheme } from "@chakra-ui/react";
import styles from "./index.css";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles,
  config,
});

export default theme;