import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import LoginModal from "../components/Auth/LoginModal";
import RegisterModal from "../components/Auth/RegisterModal";

import store from "../store";
import styled from "styled-components";

export default function RootLayout() {
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [registerModalActive, setRegisterModalActive] = useState(false);

  return (
    <Provider store={store}>
      <OutterContainer>
        <InnerContainer>
          <Header setActive={setLoginModalActive} />
          <div className="main-container">
            <Outlet />
          </div>
        </InnerContainer>
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
        <Footer />
      </OutterContainer>
    </Provider>
  );
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
`;
