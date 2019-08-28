import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

export { TextInput } from 'react-native'
export Component from 'components/Component';
export Gradient from 'components/Gradient';

export const Case = styled.View`
  width: ${Dimensions.get("window").width / 1.5 / 4}px;
  height: ${Dimensions.get("window").width / 1.5 / 4}px;
  background: white;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`


export const Code = styled.Text`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 42;
  text-align: center;
  color: #384E71;
`
