import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div>
      <Navbar />
     <div className="pt-[48px] dark:bg-bg-body">
     <main className="cite-container">
        <Outlet />
      </main>
     </div>
    </div>
  );
}

export default RootLayout;
