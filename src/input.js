import React from 'react';
import styled from 'styled-components';
const InputStyled = styled.div`
`
const Input = ({...props}) => {
  return ( 
    <InputStyled>
      <input type="text" {...props}/>
    </InputStyled>
   );
}
 
export default Input;