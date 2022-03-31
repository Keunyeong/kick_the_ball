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
      <button onClick={login}>구글 로그인 하기</button>
      <button onClick={signup}>구글 회원가입 하기</button>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("img/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 390px) {
    background-image: url("img/mobile_bg.svg");
    background-size: cover;
  }
  button {
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
  }
`;
