import React from "react";

interface Props {
  tasks: string[];
  onDelete: () => void;
}

const TodoItem: React.FC<Props> = ({ tasks, onDelete }) => {
  return (
    <>
      <ul className="list-group">
        {tasks.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo}
            <button className="btn btn-danger me-4" onClick={onDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoItem;
