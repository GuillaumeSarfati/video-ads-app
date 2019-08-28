import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';

const Gradient = props => (
  <LinearGradient {...props} />
)

Gradient.propTypes = {
  start: PropTypes.shape({}),
  end: PropTypes.shape({}),
  colors: PropTypes.arrayOf(PropTypes.string),
  locations: PropTypes.arrayOf(PropTypes.number),
}

Gradient.defaultProps = {
  start: {x: 1, y: 1},
  end: {x: 0, y: 0},
  colors: [
    'rgba(222, 186, 221, 1)',
    'rgba(172, 217, 242, 1)',
    'rgba(183, 233, 236, 1)',
  ],
  locations: [
    0,
    0.5,
    1
  ],
}

export default Gradient;
