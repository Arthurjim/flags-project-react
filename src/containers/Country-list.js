import React, {useEffect} from 'react';
import Country from '../components/Country'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux';
import Wrapper from '../components/wrapper'
const CountryListStyled = styled.div`
  display:grid;
  grid-row-gap: 2.3em;
  grid-auto-flow:columns;
  grid-column-gap:66px;
  grid-template-columns:repeat(auto-fill, 260px);
  background:var(--backgroud);
  justify-content:center;
  padding:3em 0;
`
const CountryList = () => {
  const dispatch = useDispatch()
  // const countryListByName = useSelector((state) => state.countryListByName)
  

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== '' && state.filterByName=== '') {
      console.log( state.countryListByRegion)
      return state.countryListByRegion;
    }
    if (state.filterByName !== '') {
      console.log( state.countryListByName.length )

      // console.log('es mas de 0' ,countryListByName.length )
      return state.countryListByName
    }
  

    return state.countryList;
  })
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

  return (  
    <Wrapper>
      <CountryListStyled>
        
        {
          countryList.map(({flag,name, population, region,capital,alpha2Code})=>(
            <Country 
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
            alpha2Code={alpha2Code}
      />  
          ))
        }
      </CountryListStyled>
    </Wrapper>
  );
}
 
export default CountryList;