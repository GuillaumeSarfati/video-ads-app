import React from 'react';
import styled from 'styled-components/native'
import { Transition } from 'react-navigation-fluid-transitions';

const Text = styled.Text`
  color: #384E71;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
`;

export default props => (
  <Transition shared={props.children}>
    <Text {...props}/>
  </Transition>
)
