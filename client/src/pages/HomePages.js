import React from "react";
import { useSelector } from "react-redux";
import Sspinner from "../components/shared/Sspinner";
import Layoutt from "../components/shared/Layoutt/Layoutt";

const HomePages = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layoutt>
      {error && <span>{alert(error)}</span>}
      {loading ? (<Sspinner />) : (
        <>
        <h1>Home page</h1>
      </>
    )}
    </Layoutt>
  );
};

export default HomePages;
