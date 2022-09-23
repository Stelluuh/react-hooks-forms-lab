import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log('itemData: ', itemData)
  console.log('items: ', items)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  //ItemForm Deliverable #3
  const handleItemFormSubmit = newItem => setItems([...items, newItem])

  //ItemForm Deliverable #3: pass in handleFormSubmit as prop
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} /> 
    </div>
  );
}

export default App;

/*
Hierarchy:

• App
	• Header
	• ShoppingList
		○ ItemForm
		○ Filter
			§ Item
		

*/
