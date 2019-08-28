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
      start={{x: 1, y: 1}} end={{x: 0, y: 0}}
      colors={[ 'rgba(222, 186, 221, 1)', 'rgba(172, 217, 242, 1)', 'rgba(183, 233, 236, 1)']}
      locations={[0,0.5, 1]}
      style={{marginTop: 10, marginBottom: 15, borderRadius: 9}}
    >
    <TextInput {...props} placeholderTextColor="rgb(155, 174, 201)"/>
    </Gradient>
)
