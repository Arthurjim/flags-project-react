import React from 'react';
import Search from './search';
import styled from 'styled-components';
import FilterByRegion from './filerbyRegion'
import Wrapper from './wrapper'
const ActionListStyled = styled.div`
  .grid{
    display:grid;
    
    grid-template-columns:1fr;
    grid-row-gap:20px;
  }
  @media screen and (min-width:768px){
    .grid{
    display:grid;

     grid-template-columns:480px auto 164px;
     padding:0 40px;

    }
  }
`
const ActionList = () => {
  return (
   
      <ActionListStyled>
     <Wrapper>
          <div className="grid">
            <Search/>
            <span></span>
            <FilterByRegion/>
          </div>
          </Wrapper>
      </ActionListStyled>
   
  );
}
 
export default ActionList;