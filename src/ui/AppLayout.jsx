import { Outlet } from "react-router-dom";
import CartOverview from "../features/order/CartOverview";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout