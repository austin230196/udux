import React, {ReactElement} from 'react';
import styled from "styled-components";
import {Routes, Route} from "react-router-dom";



import { Sidebar, BottomNav } from './components';
import { Home, Error } from './pages';
import {breakpoints} from "./theme";



const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

const AppGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 293px 1fr;

  @media screen and (max-width: ${breakpoints.desktop.min + 50}px){
    grid-template-columns: 250px 1fr;
  }

  @media screen and (max-width: ${breakpoints.laptop.min + 21}px){
    grid-template-columns: 1fr;
  }
`


function App(): ReactElement {
  return (
    <AppContainer>
      <AppGrid>
        <Sidebar />
        <BottomNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AppGrid>
    </AppContainer>
  );
}

export default App;
