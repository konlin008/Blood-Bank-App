import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Sspinner from "../../components/shared/Sspinner";
// import { toast } from "react-toastify";

const Loggin = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Sspinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.jpg" alt="loginImage"></img>
          </div>
          <div className="col-md-4 form-container">
            <Form formTitle={"Login "} submitBtn={"Login"} formType={"login"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Loggin;
