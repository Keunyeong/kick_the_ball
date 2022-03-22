import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Page from "../components/Page";
import InputBox from "../elements/InputBox";
import { googleLogin } from "../Firebase/firebase";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("email");
  useEffect(() => {
    if (sessionStorage.getItem("signup_email")) {
      const email = sessionStorage.getItem("signup_email");
      if (email) {
        setEmail(email);
      }
    }
  }, []);
  const submit = (e: any) => {
    e.preventDefault();
    const name: String = e.target.name.value;
    if (name) {
      console.log(e.target.name.value);
      googleLogin(navigate, false, true, name);
    } else {
      alert("이름을 입력해 주세요!");
    }
  };
  return (
    <Page>
      <h1>회원가입하기</h1>
      <SignupBox onSubmit={(e) => submit(e)}>
        <InputBox
          title="Email"
          name="email"
          type="text"
          value={email}
          disabled={true}
        />
        <InputBox title="Name" name="name" type="text" disabled={false} />
        <button type="submit">가입하기</button>
      </SignupBox>
    </Page>
  );
}

const SignupBox = styled.form`
  margin-top: 20px;
`;
