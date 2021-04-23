import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'


const SelectdStyled = styled.div`
@import url('https://fonts.google.com/specimen/Nunito+Sans');
* {
    box-sizing: border-box;
  

}
color:var(--black);
.dropdown {
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  padding: 20px;
  position: relative;
  background: var(--white);
  font-weight:600;

}
.btn-toggle .fas {
  display: none;
}
body.dark .btn-toggle .fas {
  display: inline-block;
}
.dropdown .fa-chevron-down {
  margin-left: 10px;
}
.dropdown ul {
border-radius: 4px;
  background-color: var(--background-el);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.12);
  display: none;
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  background: var(--white);
  width: 100%;
  z-index: 99;
  font-weight:600;
}
.dropdown.open ul {
  display: block;
}
.dropdown ul li {
  margin: 10px 0;
}
`
const FilterByRegion = () => {

  const dispatch = useDispatch()
  // const [dropdown, setdropdown] = useState(false)
  // const filterByRegion = useSelector((state) => state.filterByRegion)
  const [dropdown, setdropdown] = useState(false)
  const onRegionChange =(selectEvent)=>{
    dispatch({
      type:'FILTER_BY_REGION',
      payload:selectEvent
    })
   
  }
  
  return ( 
      
    <SelectdStyled>

    <div className={`${dropdown?'dropdown open':'dropdown'}`} onClick={()=> setdropdown(!dropdown)} id="filter">
          Filter by Region
          <i className="fas fa-chevron-down"></i>
          <ul>
            <li onClick={()=>onRegionChange('Africa')}>Africa</li>
            <li onClick={()=>onRegionChange('Americas')}>Americas</li>
            <li onClick={()=>onRegionChange('Asia')}>Asia</li>
            <li onClick={()=>onRegionChange('Europe')}>Europe</li>
            <li onClick={()=>onRegionChange('Oceania')}>Oceania</li>
          </ul>
        </div>
    </SelectdStyled>
   );
}
 
export default FilterByRegion;