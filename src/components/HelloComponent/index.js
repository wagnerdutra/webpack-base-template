import React from 'react';
import PropTypes from 'prop-types';

const HelloComponent = React.memo(({ text, userName, loading }) => (
  <>
    <h1>{text}</h1>
    <p>{loading ? 'Carregando...' : `Welcome: ${userName}`}</p>
  </>
));

HelloComponent.propTypes = {
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default HelloComponent;
