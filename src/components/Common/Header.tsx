import styled from "styled-components";
// import logo from "../../../public/imgs/logo.svg";

export default function Header() {
  return (
    <Wrapper>
      <div className="container">
        <HeaderLocation>Витебск</HeaderLocation>
        <HeaderPhone>+375 (29) 123-45-67</HeaderPhone>
      </div>
      <div className="container ">
        <Logo src="../../../public/imgs/logo.png" />
        <div className="container_search">
          <HeaderSearchField placeholder="Поиск блюд и ресторанов" />
          <HeaderSearchButton>
            <img src="../../../public/imgs/search.png" />
          </HeaderSearchButton>
        </div>
        <HeaderLogin>Войти</HeaderLogin>
      </div>
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  color: #000;
  height: 159px;
  margin-bottom: 10px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 35px;
  }
  .container_search {
    display: flex;
    justify-content: start;
    flex-flow: nowrap row;
  }

  hr {
    border: 1px solid #eeeeee;
  }
`;
const HeaderLocation = styled.div`
  font-size: 18px;
`;
const HeaderPhone = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Logo = styled.img`
  width: 148px;
  height: 87px;
`;
const HeaderSearchField = styled.input`
  width: 739px;
  height: 35px;
  border: none;
  border-radius: 4px 0 0 4px;
  background: #f3f3f3;
  padding: 7px 0 8px 13px;
  margin-left: 80px;
`;
const HeaderSearchButton = styled.button`
  width: 36px;
  height: 35px;
  border: none;
  border-radius: 0 4px 4px 0;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  //! Tут должна быть пикча типа ЛУУППАА (search). Oна скачана и в папке public с пикчами
`;
const HeaderLogin = styled.button`
  background: none;
  border: none;
  margin-right: 15px;
  font-size: 17px;
`;
