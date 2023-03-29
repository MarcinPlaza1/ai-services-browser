import React from 'react';
import styled from 'styled-components';

const Details = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const Url = styled.a`
  color: #3490dc;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ServiceDetails = ({ service }) => {
  return (
    <Details>
      <Title>{service.name}</Title>
      <Description>{service.description}</Description>
      <Url href={service.url}>{service.url}</Url>
    </Details>
  );
};

export default ServiceDetails;

