import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const GoogleSignInButton = styled.button`
  height: 42px;
  display: inline-block;
  width: 26%;
  border-radius: 32px;
  font-weight: 600;
  position: relative;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid rgb(76, 110, 245);
  background-color: transparent;
  color: rgb(76, 110, 245);
  margin: 10px;
`;

export const OrText = styled.p`
  font-size: 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const LoginButton = styled.button`
  background-color: rgb(76, 110, 245);
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: #3b46c8;
  }
`;

export const SignUpLink = styled.p`
  margin-top: 1.5rem;
  color: #4a56e2;
  cursor: pointer;
  font-weight: 700;
`;

