import { memo } from "react";

const Todos = ({ todos }) => {
    window.alert('rendered from Todos');
    return (
      <div className="flex flex-col">
        <h2>My Todos</h2>
        <div className="flex flex-col">
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        </div>
      </div>
    );
  };


//   export default memo(Todos);
export default Todos;