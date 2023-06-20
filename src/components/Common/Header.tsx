import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Logo as LogoIcon } from "../../static";
import { Search as SearchIcon } from "../../static";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  setActive: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ setActive }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Wrapper className='main-container'>
      <div className='container'>
        <HeaderLocation>Витебск</HeaderLocation>
        <HeaderPhone>+375 (29) 123-45-67</HeaderPhone>
      </div>
      <div className='container'>
        <LogoWrapper onClick={() => navigate("/")}>
          <LogoIcon />
        </LogoWrapper>
        <div className='container_search'>
          <HeaderSearchField placeholder='Поиск блюд и ресторанов' />
          <HeaderSearchButton>
            <SearchIcon />
          </HeaderSearchButton>
        </div>
        <HeaderLogin onClick={() => setActive(true)}>Войти</HeaderLogin>
      </div>
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  color: #000;
  // height: 159px;
  // margin-bottom: 10px;

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
const LogoWrapper = styled.div`
  width: 148px;
  height: 87px;
  cursor: pointer;
`;
const HeaderSearchField = styled.input`
  width: 739px;
  height: 35px;
  border: none;
  border-radius: 4px 0 0 4px;
  background: #f3f3f3;
  padding: 7px 0 8px 13px;
  margin-left: 80px;
  &:focus {
    outline: none;
  }
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
  padding: 7px;
  cursor: pointer;
  &:hover {
    padding: 6px;
  }
`;
const HeaderLogin = styled.button`
  background: none;
  border: none;
  margin-right: 15px;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
