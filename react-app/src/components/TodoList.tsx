import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  tasks: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<Props> = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem onDelete={() => onDelete(index)} key={index} tasks={[task]} />
      ))}
    </div>
  );
};

export default TodoList;
