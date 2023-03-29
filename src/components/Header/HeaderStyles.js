import styled from 'styled-components';

export const Container = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 800;
  height: 60px;
  max-height: 60px;
  position: fixed;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #EFF3FA;
  margin-bottom: 120px;
`;

export const Logo = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  text-size-adjust: 100%;
  color: #000;
  line-height: 1.55;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
`;

export const SignInButton = styled.button`
  padding: 0px 12px;
  appearance: none;
  text-align: left;
  text-decoration: none;
  box-sizing: border-box;
  display: inline-block;
  width: auto;
  border-radius: 4px;
  position: relative;
  line-height: 1;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: rgb(76, 110, 245);
  font-size: 14px;
  color: white;
  font-weight: bold;
  height: 40px;
`;

export const Username = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: 500;
  padding-right: 16px;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  z-index: 999;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 30px;
  top: 60px;
  background-color: #fff;
  border: 1px solid rgb(239, 243, 250);
  border-radius: 4px;
  z-index: 1000;
  padding: 8px 0;
  min-width: 180px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 4px;
  margin-right: 16px;
`;

export const DropdownItem = styled.div`
    font-size: 14px;
    border: 0px;
    background-color: transparent;
    outline: 0px;
    width: 100%;
    text-align: left;
    text-decoration: none;
    box-sizing: border-box;
    padding: 10px 12px;
    cursor: pointer;
    border-radius: 4px;
    color: rgb(0, 0, 0);
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f5f5f5;
    }

    &:nth-child(3) {
        border-top: 1px solid rgb(239, 243, 250);
    }
`;

export const Icon = styled.svg`
  margin-right: 8px;
`;

