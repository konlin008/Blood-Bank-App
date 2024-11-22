import React from "react";
import { useSelector } from "react-redux";
import Sspinner from "../components/shared/Sspinner";

const HomePages = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? <Sspinner /> : <></>}
      <div>
        <h1>Home page</h1>
      </div>
    </>
  );
};

export default HomePages;
