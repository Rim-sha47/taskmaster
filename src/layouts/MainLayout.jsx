import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 p-10">
      <Outlet />
    </div>
  );
}

export default MainLayout;