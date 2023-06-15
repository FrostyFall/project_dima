import { Outlet } from "react-router-dom";

import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
