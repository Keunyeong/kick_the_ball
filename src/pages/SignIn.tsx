import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { googleLogin } from "../Firebase/firebase";
import { useStore } from "../store/zustand";

export default function SignIn() {
  const navigate = useNavigate();
  const { setName } = useStore();
  const login = () => {
    googleLogin(navigate, true, false, setName);
  };
  const signup = () => {
    googleLogin(navigate, false, false);
  };
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <Page>
      <Logo>
        Kick
        <br />
        the
        <br />
        Ball
        <br />
      </Logo>
      <BtnBox>
        <Btn onClick={login}>구글 로그인</Btn>
        <Btn onClick={signup}>구글 회원가입</Btn>
      </BtnBox>
    </Page>
  );
}

const Page = styled.div`
  height: 100vh;
  background-image: url("img/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 270px;
  @media screen and (max-width: 390px) {
    background-image: url("img/mobile_bg.svg");
    background-size: cover;
  }
`;

const Logo = styled.div`
  font-family: "Prompt", sans-serif;
  font-weight: 700;
  font-size: 58px;
  margin: 0 400px;
  @media screen and (max-width: 1150px) {
    margin: 0 300px;
  }
  @media screen and (max-width: 390px) {
    margin: 0 100px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px 400px;
  @media screen and (max-width: 1150px) {
    margin: 20px 300px;
  }
  @media screen and (max-width: 390px) {
    margin: 20px 100px;
  }
`;

const Btn = styled.button`
  border: none;
  border-radius: 5px;
  filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.25));
  background-color: black;
  color: white;
  width: 120px;
  height: 30px;
  margin: 10px 0;
  :hover {
    background-color: white;
    color: black;
  }
`;
