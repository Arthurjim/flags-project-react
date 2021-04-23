import React, {useEffect, useState} from 'react'
import './App.css';
import CountryList from './containers/Country-list';
import ActionList from './components/action-list'
import  {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/reducer'
import Header from './components/header';
import ContryPage from './containers/country-page'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
const initialState ={
  countryList:[],
  countryListByName:[],
  countryListByRegion:[],
  filterByRegion:'',
  filterByName:''
}

const store = createStore(reducer,initialState)
//enchancer no es obligatorio, son funciones para poder mejorar el funcionamiento o invervenir cada occion enviada

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Switch>
              <Route path="/country/:id" component={ContryPage}>
                
              </Route>
              <Route path="/">
                <ActionList/>
                <CountryList/>
              </Route>
            </Switch>
          
          
          
        </Router>
      </Provider>
    </main>
  );
}

export default App;
