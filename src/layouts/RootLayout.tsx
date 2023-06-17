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
    <div className="main-container">
      <Header setActive={setLoginModalActive} />
      <Wrapper>
        <Outlet />
      </Wrapper>
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
    </div>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
`;
