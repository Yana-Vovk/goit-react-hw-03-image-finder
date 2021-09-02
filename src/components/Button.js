import React from 'react';
import s from './Styles.Module.css';

const Button = ({ onClick, isLoading }) => (
  <button type="button"
    className={s.Button}
    onClick={onClick}>
    {isLoading ? '' : 'Load more'}
  </button>
);

export default Button;
