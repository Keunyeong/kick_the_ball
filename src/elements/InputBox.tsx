import styled from "styled-components";

export default function InputBox({
  title,
  name,
  type,
  value,
  disabled,
  holder,
}: any) {
  return (
    <Input>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        name={name}
        placeholder={holder}
      />
    </Input>
  );
}

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 250px;
  label {
    margin-right: 5px;
  }
`;
