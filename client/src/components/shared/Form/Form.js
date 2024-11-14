import React, { useState } from "react";
import InputType from "./InputType";
const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
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
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
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
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    LabelText={"Name"}
                    LableFor={"forName"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputType
                    LabelText={"Role"}
                    LableFor={"forRole"}
                    inputType={"text"}
                    name={"role"}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <InputType
                    LabelText={"OrganisationName"}
                    LableFor={"forOrganisationName"}
                    inputType={"text"}
                    name={"organisationName"}
                    value={organisationName}
                    onChange={(e) => setOrganisationName(e.target.value)}
                  />
                  <InputType
                    LabelText={"HospitalName"}
                    LableFor={"forHospitalName"}
                    inputType={"text"}
                    name={"hospitalName"}
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                  />
                  <InputType
                    LabelText={"Website"}
                    LableFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    LabelText={"Address"}
                    LableFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    LabelText={"Phone"}
                    LableFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
            default:
              return null;
          }
        })()}
        {/* <InputType
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputType
          LabelText={"Name"}
          LableFor={"forName"}
          inputType={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputType
          LabelText={"Role"}
          LableFor={"forRole"}
          inputType={"text"}
          name={"role"}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <InputType
          LabelText={"OrganisationName"}
          LableFor={"forOrganisationName"}
          inputType={"text"}
          name={"organisationName"}
          value={organisationName}
          onChange={(e) => setOrganisationName(e.target.value)}
        />
        <InputType
          LabelText={"HospitalName"}
          LableFor={"forHospitalName"}
          inputType={"text"}
          name={"hospitalName"}
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <InputType
          LabelText={"Website"}
          LableFor={"forWebsite"}
          inputType={"text"}
          name={"website"}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <InputType
          LabelText={"Address"}
          LableFor={"forAddress"}
          inputType={"text"}
          name={"address"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <InputType
          LabelText={"Phone"}
          LableFor={"forPhone"}
          inputType={"text"}
          name={"phone"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> */}
        <div className="d-felx">
          <button class="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
