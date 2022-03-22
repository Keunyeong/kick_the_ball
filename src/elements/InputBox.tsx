import styled from "styled-components";

export default function InputBox(props: any) {
  const { title, name, type, value, disabled } = props;
  return (
    <Input>
      <label htmlFor={name}>{title}</label>
      <input type={type} value={value} disabled={disabled} name={name} />
    </Input>
  );
}

const Input = styled.div`
  label {
    margin-right: 5px;
  }
`;
