import React from 'react';

import classes from './Select.module.css';
import { ReactComponent as SelectIcon } from '../../../assets/icons/select.svg';

const Select = (props) => {
  return (
    <div className={classes.Select}>
      <select value={props.value} onChange={props.changed}>
        {props.options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
      <div className={classes.Icon}>
        <SelectIcon />
      </div>
    </div>
  );
};

export default Select;
