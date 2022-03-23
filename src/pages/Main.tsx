import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";
import { getUser } from "../Firebase/firebase";
import { useStore } from "../store/zustand";

export default function Main() {
  const navigate = useNavigate();
  const { name, setName } = useStore();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    !sessionStorage.getItem("token") && navigate("/");
    getUser(email, setName);
  }, []);
  return (
    <Page>
      {name}님 로그인 되었습니다.
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
