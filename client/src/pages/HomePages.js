import React from "react";
import { useSelector } from "react-redux";
import Sspinner from "../components/shared/Sspinner";
import Layoutt from "../components/shared/Layoutt/Layoutt";
import Modal from "../components/shared/modal/Modal";

const HomePages = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layoutt>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <Sspinner />
      ) : (
        <>
          <h4
            className="ms-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-plus text-success py-4"></i>
            Add Inventory
          </h4>
          <Modal />
        </>
      )}
    </Layoutt>
  );
};

export default HomePages;
