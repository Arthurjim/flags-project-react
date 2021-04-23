import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import Wrapper from '../components/wrapper';
import {useSelector} from 'react-redux';
import CountrySelected from '../components/country-selected';

const CountryPageStyled = styled.div`
`
const CountryPage =({match,history })=>{
  let DBcountry = useSelector(state => state.countryList.find(item=> item.alpha2Code.toLowerCase()=== match.params.id.toLowerCase()))
  
  const[country, setCountry] = useState(DBcountry)
 
  useEffect(()=>{
    
    if(!country){
      fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
      .then((response)=>response.json())
      .then((data) => {
        setCountry(data)
      })
    }
  },[country, match.params.id])
  function handleClick() {
    history.goBack()
  }
  return(
    <CountryPageStyled >
      <Wrapper>
       <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
        <CountrySelected  key={match.params.id}  {...country}/>
        
      </Wrapper>
    </CountryPageStyled>
  )
}

export default CountryPage;