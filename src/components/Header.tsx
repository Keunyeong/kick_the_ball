import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../store/zustand";

export default function Header({ children }: any) {
  const navigate = useNavigate();
  const { name } = useStore();
  return (
    <Head>
      <Logo>
        <img src="img/ball.svg" alt="BALL" />
      </Logo>
      <Nav>
        <div>team</div>
        <div>play</div>
      </Nav>
      <User>Lv.2 {name} 님</User>
      <BtnBox>
        <button
          onClick={() => {
            navigate("/mypage");
          }}
        >
          내정보
        </button>
        <button
          onClick={() => {
            sessionStorage.clear();
            navigate("/");
          }}
        >
          로그아웃
        </button>
      </BtnBox>
    </Head>
  );
}
const Head = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #c4c4c4;
`;
const Nav = styled.div`
  display: flex;
  border: 1px solid red;
  div {
    margin: 0 5px;
  }
`;
const User = styled.div`
  font-size: 12px;
  border: 1px solid red;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 40px;
    margin: 10px 0;
  }
`;
const BtnBox = styled.div`
  border: 1px solid red;
`;
