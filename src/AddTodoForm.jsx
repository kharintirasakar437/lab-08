import {useState} from "react";
export default function AddTodoForm({onAdd}){

const [text,setText] = useState("");
/*3. **Create `src/AddTodoForm.jsx`** and render it as `<AddTodoForm onAdd={addTodo} />`. Keep the input uncontrolled for now (controlled inputs are in a later lab): on submit, read the value, call `onAdd`, then clear it.

   ```jsx
   function handleSubmit(event) {
     event.preventDefault();
     const input = event.target.elements.text;
     // …call onAdd with input.value (trimmed), then input.value = ""
   }
   // <form onSubmit={handleSubmit}>: an <input name="text" placeholder="Add a todo…"> + an "Add" button
   ```
*/

function handleSubmit(event){
    event.preventDefault();
    const trimer = text.trim();
    if(text){
        onAdd(trimer);
        setText("");
    }
}

return(
    <form onSubmit={handleSubmit}>
        <input 
        type = "text"
        name="text"
        value={text}
        onChange={(e)=>setText(e.target.value)} 
        placeholder="Add a todo..."/>
        <button type="submit">Add</button>
    </form>
    );
}