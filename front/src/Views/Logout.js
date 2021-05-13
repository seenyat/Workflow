import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, sagaLogout } from "../Redux/actions/actionCreator";

export default function Logout() {
  const dispatch = useDispatch();

  const logoutMe = () => {
    window.open("http://localhost:4000/logout", "_self");
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={() => logoutMe()}>oihdowidjioqwdjoiqwd</button>
    </div>
  );
}
