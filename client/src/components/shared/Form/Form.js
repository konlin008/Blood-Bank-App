import React, { useState } from "react";
import InputType from "./InputType";
const Form = ({ submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <InputType
          LabelText={"Email"}
          LableFor={"forEmail"}
          inputType={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputType
          LabelText={"PassWord"}
          LableFor={"forPassWord"}
          inputType={"passWord"}
          name={"passWord"}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <div className="d-felx">
          <button className="btn btn-pimary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
