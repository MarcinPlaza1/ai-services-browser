import React from 'react';
import { connect } from 'react-redux';
import ServiceDetails from '../components/Service/ServiceDetails';

const ServiceDetailsContainer = ({ services, match }) => {
  const service = services.find(s => s.id === match.params.id);

  return (
    <div>
      {service ? (
        <ServiceDetails service={service} />
      ) : (
        <p>Service not found.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  services: state.services
});

export default connect(mapStateToProps)(ServiceDetailsContainer);
