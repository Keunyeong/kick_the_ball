import styled from "styled-components";

export default function LoginForm() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(
      "id=" + event.target.id.value + ", pw=" + event.target.password.value
    );
  };
  return (
    <Form>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" />
        <label htmlFor="password">PW</label>
        <input type="password" name="password" />
        <button type="submit">제출</button>
      </form>
    </Form>
  );
}

const Form = styled.div``;
