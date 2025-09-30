import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/layout/Header';
import { ChatPage } from './pages/ChatPage';
import { BillPage } from './pages/BillPage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <AppContainer className="App">
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<ChatPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/bills/:id" element={<BillPage />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
