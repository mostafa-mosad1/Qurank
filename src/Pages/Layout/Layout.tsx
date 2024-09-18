import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

function Layout() {
  return (
    <>
      <NavBar />

      <Outlet></Outlet>
    </>
  );
}

export default Layout;
