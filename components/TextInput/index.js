import React from 'react';
import { Dimensions } from 'react-native';
import Gradient from 'components/Gradient';
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  height: 45;
  background: white;
  border-radius: 8px;
  padding: 8px;
  width: ${Dimensions.get("window").width - 60}px;
  height: ${props => props.multiline ? 200 : 40}px;
  margin-bottom: 15px;
  margin: 2px;
`

export default props => (
    <Gradient
      start={{x: 0.0, y: 1}} end={{x: 1, y: 1.0}}
      colors={[
        'rgba(47, 137, 248, 0.777)',
        'rgba(169, 124, 204, 0.777)',
      ]}
      locations={[0,1]}
      style={{marginTop: 10, marginBottom: 15, borderRadius: 9}}
    >
    <TextInput {...props} placeholderTextColor="rgb(155, 174, 201)"/>
    </Gradient>
)
