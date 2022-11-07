import React, { useEffect, useState } from 'react';
import Key from '../../lang/key';
import translate from '../../lang/translate';

const Input = ({
  register,
  errors,
  name,
  required,
  minLength,
  maxLength,
  onChange,
  value,
  placeholder,
  className = 'form-control',
  label,
  labelClassName = 'form-label',
  type = 'text',
  setValue,
}) => {
  useEffect(() => {
    if (setValue && value) {
      setValue(name, value, { shouldValidate: true, shouldDirty: true });
    }
  }, [value]);

  return (
    <>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        {...(register
          ? register(name, {
              required: required,
              minLength: minLength,
              maxLength: maxLength,
              onChange: (e) => {
                if (onChange) onChange(e);
              },
              value: value,
            })
          : {})}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
      />
      {Object.keys(errors).length ? (
        <span style={{ color: 'red' }}>
          {errors[name]?.type === 'required' &&
            translate(Key.You_must_fill_out_this_field)}
          {errors[name]?.type === 'minLength' &&
            translate(Key.The_information_entered_is_too_short)}
          {errors[name]?.type === 'maxLength' &&
            translate(Key.The_information_entered_is_too_long)}
        </span>
      ) : (
        ''
      )}
    </>
  );
};

export default Input;
