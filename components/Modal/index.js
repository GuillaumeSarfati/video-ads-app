import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

export default styled.View`
  background: white;
  border-radius: 8px;
  width: ${Dimensions.get("window").width - 60}px;
  height: ${Dimensions.get("window").height / 2}px;
`
