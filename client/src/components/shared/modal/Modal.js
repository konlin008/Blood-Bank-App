import React, { useState } from "react";
import { useSelector } from "react-redux";
import API from "../../../services/API";
import InputType from "../Form/InputType";

const Modal = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);

  // Handle Modal Data Submission
  const handleModalSubmit = async () => {
    if (!bloodGroup || !quantity) {
      return alert("Please provide all required fields.");
    }
    setLoading(true);

    try {
      const { data } = await API.post("/inventory/create-inventory", {
        email,
        organisation: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
      });

      if (data?.success) {
        alert("New record created successfully!");
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.message);
      console.error(error);
      window.location.reload();
    }
  };

  return (
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
            <h5 className="modal-title" id="staticBackdropLabel">
              Manage Blood Record
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex mb-3">
              <span>Blood Type: &nbsp;</span>
              <div className="form-check ms-3">
                <input
                  type="radio"
                  id="in"
                  name="inventoryType" // 'name' is already present, so autofill should work
                  value="in"
                  checked={inventoryType === "in"}
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
            <select
              id="bloodGroup"
              className="form-select mb-3"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option defaultValue={"Select blood group"}>
                Select blood group
              </option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
            </select>
            <InputType
              LabelText="Email"
              LabelFor="donarEmail"
              inputType="email"
              value={email}
              id="donarEmail"
              name="donarEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputType
              LabelText="Quantity (ml)"
              LabelFor="quantity"
              inputType="number"
              value={quantity}
              id="quantity"
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              disabled={loading}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleModalSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
