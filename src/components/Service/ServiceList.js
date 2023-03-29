import React from 'react';
import ServiceCard from './ServiceCard';
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    align-items: stretch;
`;

const ServiceList = ({ services }) => {
  return (
    <List>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </List>
  );
};

export default ServiceList;
