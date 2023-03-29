import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  fetchServicesRequest,
  fetchServicesSuccess,
  fetchServicesFailure
} from '../redux/actions';
import ServiceList from '../components/Service/ServiceList';
import styled from 'styled-components';

const NoResultsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: -100px;
  left: 600px;
`;

const NoResultsTitle = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: 220px;
  line-height: 1;
  margin-bottom: 36px;
  color: rgb(239, 243, 250);
`;

const NoResultsH = styled.h3`
  line-height: 1.3;
  margin: 10px;
  font-weight: 900;
  font-size: 38px;
`;

const NoResultsParagraph = styled.p`
  color: rgb(162, 170, 184);
  font-size: 18px;
  line-height: 1.55;
  margin: 24px auto 36px;
`;

const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await axios.get('http://localhost:3001/api/services');
    dispatch(fetchServicesSuccess(response.data));
  } catch (error) {
    console.error('Error fetching services:', error);
    dispatch(fetchServicesFailure(error.message));
  }
};

function ServiceListContainer({ searchTerm, category }) {
  const allServices = useSelector((state) => state.services.services);
  const loading = useSelector((state) => state.services.loading);
  const error = useSelector((state) => state.services.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const filteredServices = allServices.filter((service) => {
    const matchSearchTerm = searchTerm
      ? service.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchCategory = category === 'All' ? true : service.category === category;

    return matchSearchTerm && matchCategory;
  });

  return (
    <div>
      {loading ? (
        <p>Loading services...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : filteredServices.length === 0 ? (
        <NoResultsContainer>
          <NoResultsTitle>Sorry :(</NoResultsTitle>
          <NoResultsH>No result found.</NoResultsH>
          <NoResultsParagraph>Please, try to search again with different keywords.</NoResultsParagraph>
        </NoResultsContainer>
      ) : (
        <ServiceList services={filteredServices} />
      )}
    </div>
  );
}

export default ServiceListContainer;
