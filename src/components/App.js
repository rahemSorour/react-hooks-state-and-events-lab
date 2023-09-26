import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState(true); // Start in 'light' mode

  function handleModeToggle() {
    setMode(!mode);
  }

  const appClass = mode ? "App light" : "App dark";
  const buttonText = mode ? "Light Mode" : "Dark Mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeToggle}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
