import React from 'react';
import styled from 'styled-components/native'
import Transition from 'components/Transition';

const Text = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;

`;

export default props => (
  <Transition shared={props.children}>
    <Text {...props}/>
  </Transition>
)
