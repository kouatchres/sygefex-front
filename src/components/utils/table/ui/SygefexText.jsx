import React from "react";
import styled from "styled-components";

const StyledTextField = styled.input`
  padding: 0.5rem;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  box-sizing: border-box;
  margin: 1rem auto;
  border: 0.2rem solid ${(props) => props.theme.grey};
`;

const SygefexText = ({ value, onChange, label, placeholder }) => {
  return (
    <StyledTextField
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value, e)}
    />
  );
};

export default SygefexText;
