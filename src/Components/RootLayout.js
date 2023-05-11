import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <main>
        <MainNavigation />
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
