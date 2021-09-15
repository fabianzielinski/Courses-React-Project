import React, { useContext, FC } from "react";
// import bemCssModules from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";

const Header: FC = () => {
  const { users } = useContext(StoreContext);
  const { courses } = useContext(StoreContext);

  const setProperlyLabel = Boolean(users) ? "Wyloguj się" : "Zaloguj się";

  const coursesElement = courses.map((cours) => (
    <li key={cours.id}>
      * {cours.title} - {cours.authors}
    </li>
  ));

  return (
    <>
      <ul> {coursesElement}</ul>

      <h1>Super Kursy dla programistów</h1>
      <button>{setProperlyLabel}</button>
    </>
  );
};

export default Header;
