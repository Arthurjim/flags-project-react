import React from 'react';
import styled from 'styled-components';
const InputStyled = styled.label`
    background: var(--white);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  padding: 0 2rem;
  border-radius: 5px;
  flex: 1;
  i{
    margin-right:1em;
    color:rgb(196, 196, 196)
    
  }
  input{
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .7em;
    outline: 0;
    color: var(--black);
    background: var(--white);
    &::-webkit-input-placeholder {
      color: #C4C4C4;
    }
  }
`
const Input = ({...props}) => {
  return ( 
    <InputStyled>
    <i className="fas fa-search"></i>
      <input type="text" placeholder="Search for a country" {...props}/>
    </InputStyled>
   );
}
 
export default Input;