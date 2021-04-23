import React,{useState} from 'react';
import Input from './input';
import {useDispatch} from 'react-redux';
import styled from 'styled-components'

const SearchStyled = styled.div`
  display:flex;
  position:relative;
  .close{
    position:absolute;
    right:1em;
    top:1em;
    border-radius:50px;
    border:none;
    box-shadow:0 2px 9px 0 rgba(0,0,0,.05);
  }
`

const Search = () => {
   
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const filterByName = (e) => {
    setInputValue(e.target.value)
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: e.target.value
    })
  }
  const clearInput =()=>{
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: ''
    })
    setInputValue('')
  }
  
  return ( 
    <SearchStyled>
      {
        inputValue &&
          <i className="far fa-times-circle close" onClick={clearInput}></i>


      }      
      <Input value={inputValue} onChange={filterByName}/>

    </SearchStyled>
   );
}
 
export default Search;