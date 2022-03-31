import styled from "styled-components";

export default function Page(props: any) {
  return <Main>{props.children}</Main>;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
