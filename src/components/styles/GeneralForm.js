import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const GeneralForm = styled.form`
  /* box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05); */
  background: ${props => props.theme.pureWhite};
  /* background: rgba(0, 0, 0, 0.02); */
  border: 5px solid white;
  padding: 20px;
  font-size: 1.7rem;
  line-height: 1.4;
  font-weight: 400;
  label {
    margin-bottom: 2rem;
    /* display: block;
     width:35vw; 
     box-sizing:border-box; */
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 2rem;
    border-style: none;
    border-bottom: 1px solid ${props => props.theme.black};
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.googleBlue};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 300;
    border-radius:7px;
    margin-top: 1rem;
    padding: .8rem .8rem;
  }
  fieldset {
    max-width: 80vw;
    /* min-width: 300px; */
    margin: 20px 
    height: 60vh;
    border: .8px solid ${props => props.theme.lightGrey};
    padding: 15px;
    display: flex;
    flex-direction: row;
    /* grid-template-columns: repeat(auto-fit, -ms-content-zoom-limit-max(200px,1fr)); */
    border-radius:.5rem;
    justify-items: center;
    box-shadow: ${props => props.theme.bs};

    &[disabled] {
      opacity: 0.3;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #359 0%, #e2b04a 20%, #359 100%);
      /* background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%); */
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default GeneralForm;
