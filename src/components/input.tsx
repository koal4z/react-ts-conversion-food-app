import React from 'react';

interface input {
  label: string;
  type: string;
  id: string;
  name: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
}

const Input = (props: input) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
};

export default Input;
