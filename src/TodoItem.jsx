// TodoItem.js
import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
