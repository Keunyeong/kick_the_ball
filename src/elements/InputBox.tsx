import styled from "styled-components";

export default function InputBox(props: any) {
  const { title, name, type, value, disabled, holder, width } = props;
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
  label {
    margin-right: 5px;
  }
  input {
    width: ${(props: any) => {
      console.log(props);
      return `${props.width}px`;
    }};
  }
`;
