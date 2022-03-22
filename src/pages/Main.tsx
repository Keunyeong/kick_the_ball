import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";

export default function Main() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <Page>
      {email}님 로그인 되었습니다.
      <button
        onClick={() => {
          sessionStorage.clear();
          navigate("/");
        }}
      >
        로그아웃
      </button>
    </Page>
  );
}
