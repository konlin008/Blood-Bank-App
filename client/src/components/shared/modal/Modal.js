import React, { useState } from "react";

const Modal = () => {
  const [, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState("");
  const [donarEmail, setDonarEmail] = useState("");

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3">
                Blood Type: &nbsp;
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    id="in"
                    name="inventoryType"
                    defaultChecked
                    value="in"
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    id="out"
                    name="inventoryType"
                    value="out"
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <select
                className="form-select"
                aria-label="Default select example"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="">Open this select menu</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
              </select>
              <div className="container">
                <div className="mb-3">
                  <label htmlFor="donarEmail" className="form-label">
                    Donar Email
                  </label>
                  <input
                    type="email"
                    id="donarEmail"
                    className="form-control"
                    value={donarEmail}
                    onChange={(e) => setDonarEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
