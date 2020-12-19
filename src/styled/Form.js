import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: #bee4f8;
    width: 400px;
    padding: 5%;
    border-radius: 20px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);

`;

export const Input = styled.input`
    border: none;
    height: 30px;
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;

    &[type="submit"] {
    background: #ff499d;
    color: #ffefee;
    font-weight: 600;
    text-transform: uppercase;
    height: 40px;
    cursor: pointer;
    box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
    0 2px 2px rgba(0,0,0,0.20), 
    0 4px 4px rgba(0,0,0,0.15), 
    0 8px 8px rgba(0,0,0,0.10),
    0 16px 16px rgba(0,0,0,0.05);
    }

    &:focus {
        outline: none;
    }
`;

export const Select = styled.select`
    border: none;
    height: 40px;
    padding: 0 10px;
    border-radius: 20px;
    margin-top: 10px; 
    border-radius: 20px;
    font-size: 11px;
    cursor: pointer;
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;

  &:focus {
      outline: none;
  }
`;

