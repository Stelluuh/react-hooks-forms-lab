import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  //ItemForm Deliverable #1:
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  //ItemForm Deliverable #1:
  const handleNameChange = e => setName(e.target.value)

  //ItemForm Deliverable #1:
  const handleSelectCategory = e => setCategory(e.target.value)

  //ItemForm Deliverable #2:
  const handleSubmit = (e) => {
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={category}
          onChange={handleSelectCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

/*
#1 Make all the input fields for this form controlled inputs, so that you can access all the form data via state. When setting the initial state for the <select> tag, use an initial value of "Produce" (since that's the first option in the list).

#2 Handle the form's submit event, and use the data that you have saved in state to create a new item object with the following properties:

#3 Add the new item to the list by updating state. To get the test passing, you'll need to use a prop called onItemFormSubmit as a callback and pass the new item to it.

NOTE: to add a new element to an array in state, it's a good idea to use the spread operator:

The spread operator allows us to copy all the old values of an array into a new array, and then add new elements as well. When you're working with state, it's important to pass a new array to the state setter function instead of mutating the original array.

*/