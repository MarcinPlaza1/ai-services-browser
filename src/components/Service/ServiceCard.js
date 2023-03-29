import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  outline: 0px;
  text-decoration: none;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: none;
  border: 1px solid rgb(224, 230, 242);
  position: relative;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  align-items: stretch;
  cursor: pointer;
  padding: 16px;
  min-height: 200px;
  width: 420px;
  margin: 10px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const LearnMore = styled.a`
  color: #3490dc;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <Title>{service.name}</Title>
      <Description>{service.description}</Description>
      <LearnMore href={service.apiDocumentation}>Docs</LearnMore>
    </Card>
  );
};

export default ServiceCard;
