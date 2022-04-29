import "./App.css";
import React from "react";
import { ClotheCategoryProvider } from "./context/clotheCategoryContext";

import Routers from "./routers/routers";

function App() {
  return (
    <div className="App">
      <ClotheCategoryProvider>
            <Routers />
      </ClotheCategoryProvider>
    </div>
  );
}

export default App;
