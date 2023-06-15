import { Outlet } from "react-router-dom";

import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

export default function RootLayout() {
  return (
    <div className='main-container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
