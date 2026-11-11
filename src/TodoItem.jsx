export default function TodoItem({ todo, onToggle, onDelete }) {
  // STATIC for now: the checkbox shows `done` but doesn't do anything, and the
  // delete button has no handler. Wire up the two events:
  //   - the checkbox should call onToggle(todo.id) when it changes
  //     (replace `readOnly` with onChange={() => onToggle(todo.id)})
  //   - the button should call onDelete(todo.id) when clicked
  return (
    <li className={todo.done ? "todo done" : "todo"}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={()=>onToggle(todo.id)} />
        <span>{todo.text}</span>
      </label>
      <button aria-label="Delete" onClick={()=>onDelete(todo.id)}>✕</button>
    </li>
  );
}
