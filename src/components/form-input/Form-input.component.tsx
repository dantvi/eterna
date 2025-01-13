import React from 'react';
import './Form-input.styles.scss';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...inputProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputProps} />
      {label && (
        <label
          className={`${
            inputProps.value && (inputProps.value as string).length
              ? 'shrink'
              : ''
          } form-input-label`}
        >
          {' '}
          {label}{' '}
        </label>
      )}
    </div>
  );
};

export default FormInput;
