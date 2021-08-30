import React from "react";

import Header from "./components/header/Header";
import StoreProvider from "store/StoreProvider";

const App = () => (
  <StoreProvider>
    {/* <p>Tak jest na początku</p> */}
    <Header />
  </StoreProvider>
);

export default App;
