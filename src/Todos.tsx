import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

export interface TodosProps {
  id: string;
  todoName: string;
  isComplete: boolean;
}

interface AddTodoAction {
  type: "ADD_TODO";
  payload: { name: string }; 
}

interface ModifyTodoAction {
  type: "Done_TODO" | "DELETE_TODO" | "EDIT_TODO";
  payload: { id: string; name: string};
}

export type TodoAction = AddTodoAction | ModifyTodoAction;

const todoReducer = (todos: Array<TodosProps>, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, newTodo(action.payload.name)];
    case "Done_TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);
      case "EDIT_TODO":
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
            ...todo,
              todoName: action.payload.name,
            };
          }
          return todo;
        });
    default:
      return todos;
  }
};

const newTodo = (todoName: string): TodosProps => {
  return { id: uuidv4(), todoName: todoName, isComplete: false };
};

const Todos: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const renderTodos = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      todoName={todo.todoName}
      isComplete={todo.isComplete}
      dispatch={dispatch}
    />
  ));

  console.log(todos);

  return (
    <div>
      <TodoInput dispatch={dispatch} />
      {renderTodos}
    </div>
  );
};

export default Todos;