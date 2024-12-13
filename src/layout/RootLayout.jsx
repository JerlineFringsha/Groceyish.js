import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div style={{ background: "blue" }}>
        {/* <Navbar /> */}
        <div className="can">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
