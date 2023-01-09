import styles from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header>
      <img src={igniteLogo} alt="Logotipo" />
    </header>
  );
}
