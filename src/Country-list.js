import React, {useEffect, useState} from 'react';
import Country from './Country'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux';
import Input from './input';
const CountryListStyled = styled.div`
  display:grid;
  grid-row-gap:2.3em;
  background:var(--backgroud);
  justify-content:center;
  padding:4em 2em;
`
const CountryList = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const countryListByName = useSelector((state)=>state.countryListByName)

  const countryList = useSelector((state)=> {
    if('' !== state.filterByRegion){
      return state.filterByRegion
    }
    if(countryListByName.length >0){
      return state.countryListByName
    }

    return state.countryList
  });
  console.log('El estado de mi app es',countryList)
  // const [countryList, setCountryList] =useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response)=> {return response.json()})
      .then((list)=>{
        dispatch({
          type:'SET_COUNTRY_LIST',
          payload:list
        })
        console.log(list.length)
        // setCountryList(data)
      })
      .catch(()=>console.log('Hubo un error'))
  },[dispatch])
  const filterByName =(e)=>{
    setInputValue(e.target.value)
    console.log(e.target.value)
    dispatch({
      type:'SET_COUNTRY_BY_NAME',
      payload:e.target.value
    })
  }
  return (  
    <CountryListStyled>
      <Input value={inputValue} onChange={filterByName}/>
      
      {
        countryList.map(({flag,name, population, region,capital})=>(
          <Country
          key={name}
          flag={flag}
          name={name}
          population={population}
          region={region}
          capital={capital}
     />
        ))
      }
    </CountryListStyled>
  );
}
 
export default CountryList;