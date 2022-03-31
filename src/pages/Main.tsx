import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import { getUser } from "../Firebase/firebase";
import { useStore } from "../store/zustand";

export default function Main() {
  const navigate = useNavigate();
  const { setName } = useStore();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    !sessionStorage.getItem("token") && navigate("/");
    getUser(email, setName);
  });
  return (
    <Page>
      <Header />
    </Page>
  );
}
