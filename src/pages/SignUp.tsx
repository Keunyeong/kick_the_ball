import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputBox from "../elements/InputBox";
import { googleLogin } from "../Firebase/firebase";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("email");
  useEffect(() => {
    !sessionStorage.getItem("signup_email") && navigate("/");
    if (sessionStorage.getItem("signup_email")) {
      const email = sessionStorage.getItem("signup_email");
      if (email) {
        setEmail(email);
      }
    }
  }, [navigate]);
  const submit = (e: any) => {
    e.preventDefault();
    const name: String = e.target.name.value;
    const mobile: String = e.target.mobile.value;
    if (name) {
      console.log(name);
      console.log(mobile);
      googleLogin(navigate, false, true, name, mobile);
    } else {
      alert("이름을 입력해 주세요!");
    }
  };
  return (
    <Page>
      <h1>회원가입</h1>
      <SignupBox onSubmit={(e) => submit(e)}>
        <InputBox
          title="Email"
          name="email"
          type="text"
          value={email}
          disabled={true}
        />
        <InputBox
          title="Name"
          name="name"
          type="text"
          disabled={false}
          holder="이름"
        />
        <InputBox
          title="Mobile"
          name="mobile"
          type="text"
          disabled={false}
          holder={`'-'를 제외하고 입력해주세요.`}
          width="50"
        />
        <button type="submit">가입하기</button>
      </SignupBox>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  h1 {
    font-size: 40px;
    font-weight: 800;
  }
`;
const SignupBox = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
