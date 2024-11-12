import React from "react";

const InputType = ({
  LabelText,
  LableFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={LableFor} className="form-label">
          {LabelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
