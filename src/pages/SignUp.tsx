import Page from "../components/Page";

export default function SignUp(props: any) {
  const email: String = props.email;
  return (
    <Page>
      <h1>{email}님의 회원가입을 환영합니다.</h1>
    </Page>
  );
}
