import React, { useContext, FC } from "react";
// import bemCssModules from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";

const Header: FC = () => {
  const { user } = useContext(StoreContext);

  const setProperlyLabel = Boolean(user) ? "Wyloguj się" : "Zaloguj się";

  return (
    <>
      <div>AAA</div>
      <h1>Super Kursy dla programistów</h1>
      <button>{setProperlyLabel}</button>
    </>
  );
};

export default Header;
