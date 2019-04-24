import React from 'react';
import styled from 'styled-components/native'
import Transition from 'components/Transition';

const Text = styled.Text`
  color: ${props => props.light ? 'white' : '#384E71' };
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
`;

export default props => (
  <Transition shared={props.children}>
    <Text {...props}/>
  </Transition>
)
