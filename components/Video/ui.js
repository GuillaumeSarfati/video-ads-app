import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import mixins from '../../constants/Mixins'

export const Component = styled.View`
  width: ${Dimensions.get('window').width - 60}px;
  height: ${Dimensions.get('window').width - 60}px;
  background: black;
  ${mixins.shadow()}
  ${mixins.radius()}
  margin-bottom: 15px;
  overflow: hidden;
`
