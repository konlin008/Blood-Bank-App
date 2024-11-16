import React from "react";

const InputType = ({
  LabelText,
  LabelFor,
  inputType,
  value,
  onChange,
  name,
  autocomplete,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={LabelFor} className="form-label">
        {LabelText}
      </label>
      <input
        type={inputType}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        id={LabelFor}
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default InputType;
