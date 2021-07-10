function Todo() {
  const todos = [{ item: "Lorem ipsum" }];

  return (
    <div>
      <div>Budget 6 000 000</div>
      <div>Maxtak 8 000 000</div>
      <div>Delar av budget</div>
      {/* <div className="todo">
        <div className="todo-item one">
          <label className="column-name" htmlFor="add">
            Lägg till
          </label>
          <input id="add" type="text" className="add-todo" />
        </div>
        <div className="todo-item two">
          <label className="column-name" htmlFor="">
            Att göra
          </label>
          <ul className="todo-list">
            {todos.map((todo, idx) => (
              <li key={idx} className="item">
                <input type="checkbox" id={todo.item} name="" value="" />
                <label htmlFor={todo.item}>{todo.item}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="todo-item three">
          <label className="column-name" htmlFor="">
            Klara
          </label>
          <ul className="todo-list">
            <li className="item"></li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Todo;
