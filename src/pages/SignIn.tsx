import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";
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
