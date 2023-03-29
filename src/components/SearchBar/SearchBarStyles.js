import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  height: 42px;
  line-height: 40px;
  appearance: none;
  resize: none;
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  color: #000;
  display: block;
  text-align: left;
  min-height: 42px;
  padding-left: 14px;
  padding-right: 42px;
  border-radius: 32px;
  border: 1px solid #D3DAE7;
  background-color: #fff;
  -webkit-transition: border-color 100ms ease;
  transition: border-color 100ms ease;
  padding-left: 42px;
`;

export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 2;
`;

export const Suggestion = styled.div`
  padding: 8px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;