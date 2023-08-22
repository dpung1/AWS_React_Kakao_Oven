import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Reset } from 'styled-reset';
import Main from './pages/Main/Main';
import { Global } from '@emotion/react';
import * as S from './styles/common'

function App() {
  return (
  <>
    <Reset />
    <Global styles={S.GSCommon}/>
    <Routes>
      <Route path= "main" element={ <Main />}/>
      <Route path= ""/>
    </Routes>
  </>
  );
}

export default App;
