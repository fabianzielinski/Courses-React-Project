import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";

const Header = () => {
  const { user, setUser } = useContext(StoreContext);

  const setProperlyLabel = Boolean(user) ? "Wyloguj się" : "Zaloguj się";

  return (
    <Header>
      <div></div>
      <h1>Super Kursy dla programistów</h1>
      <button>{setProperlyLabel}</button>
    </Header>
  );
};

export default Header;
