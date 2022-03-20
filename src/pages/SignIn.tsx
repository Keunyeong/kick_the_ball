import { Link } from "react-router-dom";
import Page from "../components/Page";
import LoginForm from "../components/LoginForm";
import { googleLogin } from "../Firebase/firebase";
import { useState } from "react";

export default function SignIn() {
  const [state, setState] = useState("");
  const login = () => {
    googleLogin(setState);
  };
  console.log(state);
  return (
    <Page>
      <button onClick={login}>구글 로그인 하기</button>
      {/* <Link to={"/signup"}>signup</Link> */}
    </Page>
  );
}
