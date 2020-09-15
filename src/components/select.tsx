import React from 'react';

interface select {
  onChange(e: React.FormEvent<HTMLSelectElement>): void;
}

const Select = (props: select) => {
  return (
    <>
      <label htmlFor="unit">Unit</label>
      <select id="unit" name="unit" onChange={props.onChange}>
        <option value="-">--select unit--</option>
        <option value="g">g</option>
        <option value="kg">kg</option>
      </select>
    </>
  );
};

export default Select;
