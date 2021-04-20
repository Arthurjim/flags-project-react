import './App.css';
import CountryList from './Country-list';
import  {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState ={
  countryList:[],
  countryListByName:[],
  countryListBYRegion:[],
  filterByRegion:'',
}

function reducer(state, action){
  switch(action.type){
    case 'SET_COUNTRY_LIST':{
      console.log('se actauliza')
      return {...state,countryList: action.payload}
    }
    case 'SET_COUNTRY_BY_NAME':{
      const countryListByName = (state.countryList || [])
      .filter(country=> country.name.toLowerCase().includes(action.payload.toLowerCase()))
      return {...state,countryListByName}


    }
  
    default:{
      return state
    }
      
  }
}

const store = createStore(reducer,initialState)
//enchancer no es obligatorio, son funciones para poder mejorar el funcionamiento o invervenir cada occion enviada

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList/>
      
      </div>
    </Provider>
  );
}

export default App;
