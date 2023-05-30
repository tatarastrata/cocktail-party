import React from 'react';
import styles from './FormControl.module.scss';
import { IFormControlPropTypes } from './FormControlPropTypes';

const FormControl: React.FC<IFormControlPropTypes> = ({
  fieldId,
  fieldName,
  fieldType = 'text',
  placeholder,
  label,
}) => {
  return (
    <div className={styles.FormControl}>
      <div className={styles.FormControl_field}>
        <label className={styles.FormControl_label} htmlFor={fieldId}>
          {label}
        </label>
        <div className={styles.FormControl_control}>
          <input
            className={styles.FormControl_input}
            name={fieldName}
            type={fieldType}
            placeholder={placeholder}
            id={fieldId}
          />
        </div>
      </div>
    </div>
  );
};

export default FormControl;
