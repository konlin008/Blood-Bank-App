import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sspinner from "../components/shared/Sspinner";
import Layoutt from "../components/shared/Layoutt/Layoutt";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from "moment";

const HomePages = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  //get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <Layoutt>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <Sspinner />
      ) : (
        <>
          <div className="container">
            <h4
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-plus text-success py-4"></i>
              Add Inventory
            </h4>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">InventoryType</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">DonarEmail</th>
                  <th scope="col">Time &Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity}</td>
                    <td>{record.donarEmail}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal />
          </div>
        </>
      )}
    </Layoutt>
  );
};

export default HomePages;
