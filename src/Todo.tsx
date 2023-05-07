import * as React from "react";
import { TodosProps, TodoAction } from "./Todos";

export interface Props extends TodosProps {
  dispatch: React.Dispatch<TodoAction>;
}

const Todo: React.FC<Props> = ({ dispatch, id, isComplete, todoName }) => {
  const handleDelete = (id: string) => {
    dispatch({
      type: "DELETE_TODO",
      payload: {id: id, name: todoName },
    });
  };
  const handleDone = (id: string) => {
    dispatch({
      type: "Done_TODO",
      payload: { id: id, name: todoName },
    });
  };
  const handleEdit = (id: string) => {
    dispatch({
      type: "EDIT_TODO",
      payload: { id: id, name: todoName},
    });
  }
  return (
    <div>
      <div>
        <p style={{ textDecoration: `${isComplete ? "line-through" : ""}` }}>
          {todoName}
        </p>
      </div>
      <div>
        <button onClick={() => handleDone(id)}>Done</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => handleEdit(id)}>Edit</button>
      </div>
    </div>
  );
};

export default Todo;