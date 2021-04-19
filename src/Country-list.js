import React, {useEffect, useState} from 'react';
import Country from './Country'
import styled from 'styled-components'

const CountryListStyled = styled.div`
  display:grid;
  grid-row-gap:2.3em;
  background:var(--backgroud);
  justify-content:center;
  padding:4em 2em;
`
const CountryList = () => {
  const [countryList, setCountryList] =useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response)=> {return response.json()})
      .then((data)=>{
        console.log(data)

        setCountryList(data)
      })
      .catch(()=>console.log('Hubo un error'))
  },[])
  return (  
    <CountryListStyled>
      CountryList
      
      {
        countryList.map((item)=>(
          <Country
          flag={item.flag}
          name={item.name}
          population={item.population}
          region={item.region}
          capital="Mexcio"
     />
        ))
      }
    </CountryListStyled>
  );
}
 
export default CountryList;