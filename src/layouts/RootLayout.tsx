import { Outlet } from "react-router-dom";

import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import LoginModal from "../components/Auth/LoginModal";
import { useState } from "react";
import RegisterModal from "../components/Auth/RegisterModal";
import styled from "styled-components";

export default function RootLayout() {
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [registerModalActive, setRegisterModalActive] = useState(false);

  return (
    <>
      <Header setActive={setLoginModalActive} />
      <div className='main-container'>
        <Outlet />
      </div>
      <Footer />
      <LoginModal
        isActive={loginModalActive}
        setActive={setLoginModalActive}
        setRegisterModalActive={setRegisterModalActive}
      />
      <RegisterModal
        isActive={registerModalActive}
        setActive={setRegisterModalActive}
        setLoginModalActive={setLoginModalActive}
      />
    </>
  );
}
