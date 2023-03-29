import styled from 'styled-components';

export const Container = styled.aside`
  width: 300px;
  min-width: 300px;
  left: 0;
  bottom: 0;
  z-index: 100;
  height: 100vh;
  position: fixed;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #fff;
  border-right: 1px solid #EFF3FA;
  margin: 34px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const Title = styled.h2`
  color: #A2AAB8;
  font-size: 16px;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: -6px;
  margin-top: 144px;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CategoryItem = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  color: rgb(131, 137, 151);
  padding: 10px 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover{
    color: #000;
  }
`;