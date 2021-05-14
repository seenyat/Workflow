import { useDispatch } from "react-redux";
import { logout } from "../Redux/actions/actionCreator";

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
