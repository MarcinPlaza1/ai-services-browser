import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ServiceList from './containers/ServiceListContainer';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Register from './components/RegisterPage/Register';
import { UserContextProvider } from './contexts/UserContext';
import GlobalStyle from './GlobalStyle';

const MainContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  color: #000;
  line-height: 1.55;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 19%;
  margin-right: auto;
  margin-top: 5%;
  display: flex;
  justify-content: flex-start;
`;

function App() {
  const allServices = useSelector((state) => state.services.services);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    setSearchTerm('');
  }, [category]);

  return (
    <UserContextProvider>
      <GlobalStyle />
      <Router>
        <Header setSearchTerm={setSearchTerm} allServices={allServices} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <MainContainer>
                <Sidebar setCategory={setCategory} />
                <ContentContainer>
                  <ServiceList searchTerm={searchTerm} category={category} />
                </ContentContainer>
              </MainContainer>
            }
          />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
