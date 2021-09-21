import React from 'react';
import './App.css';
import MainCatsComponent from './components/MainCatsComponent/MainCats';
import styled from 'styled-components';

const AppClass = styled.div`
text-align: center;
font-family: Roboto;
margin: 0vh 29vw;
@media(max-width: 768px) {
  margin: 0vh 1vw;
}
`;

const HeaderClass = styled.div`
font-family: Chango;
color: #2b98f0;
font-size: 3vw;
margin-top: 20px;
`;

function App() {
  return (
    <AppClass className="App">
      <HeaderClass className="header">Random Cat Stuff</HeaderClass>
      <MainCatsComponent />
    </AppClass>
  );
}

export default App;
