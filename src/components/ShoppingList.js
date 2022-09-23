import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("") // Filter Deliverable #1, where to add state for this feature.

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter(item => item.name.toLowerCase().includes(search.toLowerCase())) //Filter Deliverable #4
  

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        //Filter Deliverable #1: Passing state as props
        search = {search}
        onSearchChange={setSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
